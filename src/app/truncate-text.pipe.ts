import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    }
    const truncatedText = value.substr(0, length);
    return `${truncatedText}...`;
  }
}
