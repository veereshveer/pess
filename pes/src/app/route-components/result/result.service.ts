import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url = 'http://localhost:8082/employee/';
  
  constructor(private http: HttpClient) { }

  allDeatils = () => {
   return this.http.get(this.url+"getall")
  }
  getEmpByDeptData = () =>{
    return this.http.get(this.url+"deptChart")
  }
  getEmpByProData = () =>{
    return this.http.get(this.url+"proChart")
  }
  getEmpByJoindata = () =>{
    return this.http.get(this.url+"empChart")
  }
}
