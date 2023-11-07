import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(name: string,gender: string): string {
        if(gender.toLocaleLowerCase()== "male")
        return "Mr. " + name;
      else
        return "Ms. " +name;
  }

}
