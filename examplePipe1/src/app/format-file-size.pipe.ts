import { Pipe, PipeTransform } from '@angular/core';

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];

@Pipe({
  name: 'formatFileSize'
})
export class FormatFileSizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const units = args[0]
      ? FILE_SIZE_UNITS_LONG
      : FILE_SIZE_UNITS;
      
    let power = Math.round(Math.log(value) / Math.log(1024));
  	power = Math.min(power, units.length - 1);
  	
  	const size = value / Math.pow(1024, power); // size in new units
  	const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
  	const unit = units[power];
  	
  	return `${formattedSize} ${unit}`;
  }

}
