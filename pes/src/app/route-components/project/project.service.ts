import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://localhost:8082/project/';

  constructor(private http: HttpClient) { }

  getProjects = (id?: string) => {
    let self = this;
    if (id) {
      return self.http.get(self.url + id);
    } else {
      return self.http.get(self.url);
    }
  }

  addProject = (data: any) => {
    let self = this;
    console.log(data);
    return self.http.post(self.url, data);
  }

  updateProject = (data: any, id: any) => {
    let self = this;
    return self.http.put(self.url + id, data);
  }
  deleteProject = (id: string) => {
    let self = this;
    return self.http.delete(self.url + id);
  }

}
