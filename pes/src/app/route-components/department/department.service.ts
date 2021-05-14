import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  url = 'http://localhost:8082/department/';
  constructor(private http: HttpClient) { }

  getDepartments = (id?: string) => {
    let self = this;
    if (id) {
      return self.http.get(self.url + id)
      .toPromise();

    } else {
      return self.http.get(self.url)
      .toPromise();
    }
  }

  addDepartment = (data : any) => {
    let self = this;
    return self.http.post(this.url, data);
  }

  updateDepartment= (data : any,id:any) => {
    let self = this;
    return self.http.put(this.url+id, data);
  }

  deleteDepartment = (id: string) => {
    let self = this;
    return self.http.delete(this.url + id);
  }
}
