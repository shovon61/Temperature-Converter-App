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


}
