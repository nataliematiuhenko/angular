import { Component, OnInit } from '@angular/core';
import { ShortenerApiService } from '../shortener-api.service';
import { StorageService } from '../storage.service';
import { Shortening } from '../models/shortening-response.interface';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})

export class ShortenerComponent implements OnInit {
  url = '';
  name = '';
  shortenings: Shortening[] = [];

  constructor(
    private shortAPI: ShortenerApiService,
    private storageService: StorageService,

  ) { }

  onReset() {
    localStorage.clear();
    this.updateShortenings();
  }

  ngOnInit() {
    this.updateShortenings();
  }
  
  onSubmit() {

    if (!this.url) {
      return;
    }
    
    let shortName = this.name;

    this.shortAPI.shortenUrl(this.url).subscribe((response) => {
      response.result.name = shortName;
      response.result.id = new Date().getTime().toString();

      this.storageService.saveShortening(response.result);
      this.updateShortenings();
      console.log(this.storageService.getSingleShortening(+response.result.id))
    });

  }

  onDelete(id : number) {
    
    if (confirm("Do you really want to delete this shortening ?")) {
      let requestedItem = this.shortenings.find(el => el.id);
      this.storageService.deleteItem(+requestedItem.id);
      this.updateShortenings();
    }
  }

  updateShortenings() {
    this.shortenings = this.storageService.getShortenings();
  }
}