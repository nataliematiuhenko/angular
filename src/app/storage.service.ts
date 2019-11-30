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
  
<<<<<<< HEAD
  getSingleShortening(shortId: number): Observable<Shortening> {
    return (this.shortenings.find(i => +i.id == shortId));
    
=======
  getSingleShortening(id: string): Shortening {
    console.log(this.shortenings.find(i => i.id))
    // this.getShortenings().filter(item => item.id === id)[0];
    return this.shortenings.find(i => i.id);
>>>>>>> 5faa4ebcd1a016409a9307890ac38a64ae8513d1
  }
  
  
  updateStorage(shortenings: Shortening[]): void {
    localStorage.setItem("shortenings", JSON.stringify(shortenings));
  }

  deleteItem(id: number): void {
    this.shortenings = this.shortenings.filter(item => +item.id != id);
    this.updateStorage(this.shortenings);
  }
}