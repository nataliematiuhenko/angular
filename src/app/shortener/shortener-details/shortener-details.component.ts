import { Component, OnInit, Input } from '@angular/core';
import { Shortening } from '../../models/shortening-response.interface';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute} from "@angular/router";
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-shortener-details',
  templateUrl: './shortener-details.component.html',
  styleUrls: ['./shortener-details.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class ShortenerDetailsComponent implements OnInit {

  @Input() shortening: Shortening[];
  id: string;
  
  constructor( private location: Location,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
    ) { }

  private getSpecificShort() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    const short: Shortening = this.storageService.getSingleShortening(this.id);
  }

  short  = this.getSpecificShort();

  onDelete(id : number) {
  
    if (confirm("Do you really want to delete this shortening ?")) {
      let requestedItem = this.short;
      this.storageService.deleteItem(+requestedItem.id);
      this.goBack();
    }
  }
  
  goBack() {
    this.location.back();
  }


  ngOnInit() {
   
  }
}


