import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8082/employee/';
  loginUrl = "http://localhost:8082/userLogin/"
  constructor(private http: HttpClient) { }

  getEmployees = (id?: string) => {
    let self = this;
    if (id) {
      return self.http.get(this.url + id);
    } else {
      return self.http.get(this.url);
    }
  }

  addEmployee = (data : any) => {
    let self = this;
    return self.http.post(this.url, data);
  }

  updateEmployee= (data : any, id:any) => {
    let self = this;
    return self.http.put(this.url+id, data);
  }

  deleteEmployee = (id: string) => {
    let self = this;
    return self.http.delete(this.url + id);
  }

  getLogIn = (id :string) => {
    let self = this;
    return self.http.get(this.loginUrl+id);
  }
  editLogIn = (data : any, id:any) => {
    let self = this;
    return self.http.put(this.loginUrl+id, data);
  }
}
