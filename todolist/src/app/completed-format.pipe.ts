import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedFormat'
})
export class CompletedFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
