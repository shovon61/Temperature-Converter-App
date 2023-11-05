import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  valueoutput!: string

  transform(value: string): string {

  this.valueoutput = value.split('').reverse().join('');

    return this.valueoutput;

  }
}
