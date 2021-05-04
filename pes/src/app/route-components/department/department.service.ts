import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = 'http://localhost:8082/department/';
  constructor(private http: HttpClient) { }

  getDepartments = (id?: string) => {
    if (id) {
      return this.http.get(this.url + id)
      .toPromise();

    } else {
      return this.http.get(this.url)
      .toPromise();
    }
  }

  addDepartment = (data : any) => {
    return this.http.post(this.url, data);
  }

  updateDepartment= (data : any) => {
    return this.http.put(this.url, data);
  }

  deleteDepartment = (id: string) => {
    return this.http.delete(this.url + id);
  }
}
