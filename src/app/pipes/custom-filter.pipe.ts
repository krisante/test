import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any[], searchedValue: string): any[] {
    if (searchedValue && searchedValue !== '') {
      return value.filter(result => result.name.toLowerCase().includes(searchedValue.toLowerCase()));
    }
    return [];
  }

}
