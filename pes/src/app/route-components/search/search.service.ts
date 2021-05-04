import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://localhost:8082/employee/';
  constructor(private http : HttpClient) { }
  search = (data : any) => {
   return this.http.get(this.url+"getProCount", data)
  }
}
