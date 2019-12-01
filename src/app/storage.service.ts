import { Injectable } from '@angular/core';
import { Shortening } from './models/shortening-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  shortenings: Shortening[] = [];

  constructor() {
    this.shortenings = this.getShortenings();
  }

  saveShortening(shortening: Shortening): void {
    this.shortenings.push(shortening);
    this.updateStorage(this.shortenings);
  }

  getShortenings(): Shortening[] {
    const shorteningsString = localStorage.getItem('shortenings');
    if (!shorteningsString) {
      return [];
    }

    try {
      return JSON.parse(shorteningsString);
    } catch {
      return [];
    }
  }
  
  getSingleShortening(shortId: number): Observable<Shortening> {
    return this.shortenings.find(i => +i.id == shortId);
  }
  
  
  updateStorage(shortenings: Shortening[]): void {
    localStorage.setItem("shortenings", JSON.stringify(shortenings));
  }

  deleteItem(shortId: string): void{
    let index = this.shortenings.indexOf(this.shortenings.find(i => i.id == shortId))
    this.shortenings.splice(index,1);
    this.updateStorage(this.shortenings);
  }
}