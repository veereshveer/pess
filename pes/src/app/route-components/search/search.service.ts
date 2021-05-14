import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://localhost:8082/report/';
  constructor(private http : HttpClient) { }
  search = (empName:any,empCode:any,proName:any,proCode:any,deptName:any) => {
    let self = this;
   return self.http.get(self.url+"Search/"+empName+"/"+empCode+"/"+proName+"/"+proCode+"/"+deptName)
  }
}
