import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://localhost:8082/project/';

  constructor(private http: HttpClient) { }

  getProjects = (id?: string) => {
    if (id) {
      return this.http.get(this.url + id);
    } else {
      return this.http.get(this.url);
    }
  }

  addProject = (data : any) => {
    return this.http.post(this.url, data);
  }

  updateProject = (data : any) => {
    return this.http.put(this.url, data);
  }
  deleteProject = (id: string) => {
    return this.http.delete(this.url + id);
  }

}
