import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  }
}
