import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedBadgeFormat'
})
export class CompletedBadgeFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value?"badge-success":"badge-danger";
  }

}
