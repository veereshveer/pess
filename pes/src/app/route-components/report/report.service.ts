import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:8082/employee/';
  constructor(private http: HttpClient) { }
  getCount = () =>{
    return this.http.get(this.url+'count')
    .toPromise();
  }

  getSummary = () =>{
    return this.http.get(this.url+'summary');
  } 

  getDetails = () =>{
    return this.http.get(this.url+'details');
  }
  
}
