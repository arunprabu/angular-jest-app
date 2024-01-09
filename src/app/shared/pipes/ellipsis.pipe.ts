import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, endAt?: number ): string {
    if(endAt && value.length > 0) {
      return value.substring(0, endAt) + '...'
    }

    if(value.length > 0) {
      return value;
    }
    return 'Invalid Input';
  }

}
