import { Injectable } from '@angular/core';
import { Shortening } from './models/shortening-response.interface';

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
  getSingleShortening(id: number): Shortening {
    return this.getShortenings().filter(item => item.id === id)[0];
  }

  updateStorage(shortenings: Shortening[]): void {
    localStorage.setItem('shortenings', JSON.stringify(shortenings));

  }

  deleteItem(deleteId: number): void {
    this.shortenings = this.shortenings.filter(item => item.id != deleteId);
    this.updateStorage(this.shortenings);
  }
}