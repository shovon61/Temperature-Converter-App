import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'convert-temperature-by-using-custom-pipe-in-angular';
  title2:string = "convert temperature by using custom pipe in angular";
  title3:string ="convert string into an array by using custom pipe in angular";
  title4:string ="Revere String and join and multiple pipe";
  Celsius!:number;
  Fahrenheit!:number;
  str_to_arr!: string;
  reverse_str!:string;
  students: any[] = [
    {
        ID: 'std101', Name: 'Rakesh Rout',
        DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    },
    {
        ID: 'std102', Name: 'Anurag Mohanty', 
        DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
    },
    {
        ID: 'std103', Name: 'Priyanka Dewangan', 
        DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
    },
    {
        ID: 'std104', Name: 'Hina Sharma', 
        DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
    },
    {
        ID: 'std105', Name: 'Sambit Satapathy',
        DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
    }
];


}
