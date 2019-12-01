import { Pipe, PipeTransform } from '@angular/core';
import { Shortening } from './models/shortening-response.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Shortening[], searchTerm: string): Shortening [] {
    if(!values || !searchTerm) {
      return values;
    }
    return values.filter(short =>
      short.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }

}
