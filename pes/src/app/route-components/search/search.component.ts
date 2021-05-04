import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  employeeName : any ;
  employeeCode : any ;
  projectName : any ;
  projectCode : any ;
  departmentname : any ;
  departmentCode : any ;
  empDetails : any ;
  displaytable: any;
  constructor(private service : SearchService) { }

  ngOnInit(): void {
  }
  search = () => {
  this.service.search({
    "employeeName" : this.employeeName,
    "employeeCode" : this.departmentCode,
    "projectName"  : this.projectName,
    "projectCode"  : this.projectCode,
    "departmentname" : this.departmentname,
    "departmentCode" : this.departmentCode
  })
  .subscribe((response) =>{
    this.empDetails = response;
  }, (err) => {
    console.log(err);
  })
}
}
