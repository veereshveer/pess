import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url = 'http://localhost:8082/report/';
  
  constructor(private http: HttpClient) { }

  getEmpByJoindata = () =>{
    let self = this;
    return self.http.get(this.url+"empJoin")
  }
}
