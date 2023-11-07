import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sinterface } from '././sinterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  url="assets/students.json";

  constructor( private http:HttpClient ) { }

  getdata():Observable<Sinterface>{
    return this.http.get<Sinterface>(this.url);
  }
  
}
