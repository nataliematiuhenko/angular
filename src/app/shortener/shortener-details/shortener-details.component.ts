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
      this.storageService.deleteItem(id);
      this.goBack();
    }
  }
  
  goBack() {
    this.location.back();
  }


  ngOnInit() {
    let shortId = this.activatedRoute.snapshot.paramMap.get('id');
    this.short = this.storageService.getSingleShortening(+shortId);

  }
}


