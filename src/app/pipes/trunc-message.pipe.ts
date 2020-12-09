import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncMessage'
})
export class TruncMessagePipe implements PipeTransform {
  transform(value: string, length: number): any {
    if (value.length > length) {
      return `${value.substring(0, length)}...`;
    }
    return value;
  }
}
