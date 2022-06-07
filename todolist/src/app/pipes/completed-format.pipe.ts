import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedFormat'
})
export class CompletedFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
