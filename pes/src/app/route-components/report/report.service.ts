import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'http://localhost:8082/report/';
  constructor(private http: HttpClient) { }
  getCount = () =>{
    return this.http.get(this.url+'count')
    .toPromise();
  }

  getDeptSummary = () =>{
    return this.http.get(this.url+'empSummary');
  } 
  getProSummary = () =>{
    return this.http.get(this.url+'proSummary');
  } 

  getDetails = () =>{
    return this.http.get(this.url+'empAllDetails');
  }
  
}
