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
  


  constructor( private location: Location,
    private _router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
    ) { 
      this.id = this.route.snapshot.paramMap.get("id");
      this.shortening = this.storageService.getSingleShortening(this.id);
    }

    
  goBack() {
    this.location.back();
  }


  ngOnInit() {
    console.log(
    this.storageService.getSingleShortening(this.shortening.id)
    );
  }
}


