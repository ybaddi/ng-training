import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedValueFormat'
})
export class CompletedValueFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value?"Completed":"Not yet Completed";
  }

}
