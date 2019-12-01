import { Component, OnInit } from '@angular/core';
import { ShortenerApiService } from '../shortener-api.service';
import { StorageService } from '../storage.service';
import { Shortening } from '../models/shortening-response.interface';
import { NgxSpinnerService } from "ngx-spinner";
 
@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})

export class ShortenerComponent implements OnInit {
  url = '';
  name = '';
  filter : string;
  shortenings: Shortening[] = [];

  constructor(
    private shortAPI: ShortenerApiService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.updateShortenings();
  }
  
  onSubmit() {

    if (!this.url || !this.name) {
      alert("We need both field to shorten the URL for you");
    }
    

    this.spinner.show();
    let shortName = this.name;

    this.shortAPI.shortenUrl(this.url).subscribe((response) => {
      response.result.name = shortName;
      response.result.id = new Date().getTime().toString();

      this.storageService.saveShortening(response.result);
      this.updateShortenings();
      this.spinner.hide();
    });

  }
    
  updateShortenings() {
    this.shortenings = this.storageService.getShortenings();
  }

  onDelete(shortId: number) {
    if (confirm("Do you really want to delete this shortening ?")) {
      let requestedId = this.shortenings.find(el => +el.id == shortId).id;
     this.storageService.deleteItem(requestedId)
     this.updateShortenings();
    }
  }

  onReset() {
    localStorage.clear();
    this.updateShortenings();
  }
}