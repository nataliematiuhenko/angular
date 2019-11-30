import { Component, OnInit, Input } from '@angular/core';
import { Shortening } from '../../models/shortening-response.interface';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { StorageService } from 'src/app/storage.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shortener-details',
  templateUrl: './shortener-details.component.html',
  styleUrls: ['./shortener-details.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

<<<<<<< HEAD
export class ShortenerDetailsComponent implements OnInit {
  
  @Input() shortening: Shortening;
  id: string;
  short: Object;
    
  constructor ( private location: Location,
                private activatedRoute: ActivatedRoute,
                private storageService: StorageService,
  ) { }

  onDelete(id : string) {
  
    if (confirm("Do you really want to delete this shortening ?")) {
       this.storageService.deleteItem(+id);
=======
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
>>>>>>> 5faa4ebcd1a016409a9307890ac38a64ae8513d1
      this.goBack();
    }
  }
  
  goBack() {
    this.location.back();
  }


  ngOnInit() {
<<<<<<< HEAD
    let shortId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(shortId);
    this.short = this.storageService.getSingleShortening(+shortId);
    console.log("this shortenForm is:" + this.short);

=======
   
>>>>>>> 5faa4ebcd1a016409a9307890ac38a64ae8513d1
  }
}


