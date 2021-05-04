import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8082/employee/';
  constructor(private http: HttpClient) { }

  getEmployees = (id?: string) => {
    if (id) {
      return this.http.get(this.url + id);
    } else {
      return this.http.get(this.url);
    }
  }

  addEmployee = (data : any) => {
    return this.http.post(this.url, data);
  }

  updateEmployee= (data : any) => {
    return this.http.put(this.url, data);
  }

  deleteEmployee = (id: string) => {
    return this.http.delete(this.url + id);
  }}
