import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public employeeName : String = '' ;
  public employeeCode : String = '' ;
  public projectName : String = '' ;
  public projectCode : String = '' ;
  public departmentName : String = '' ;
  public empDetails : any = [] ;
  public display: String ="";
  public resultModel:boolean=false;
  public name : String = '';
  public empCode: String = '';
  public email: String = '';
  public deptName: String = '';
  public proName: String = '';

  constructor(private service : SearchService) { }

  ngOnInit(): void {
  }
  search = () => {
    let self = this;
  self.service.search(
    self.employeeName,
    self.employeeCode,
    self.projectName,
    self.projectCode,
    self.departmentName
  )
  .subscribe((response) =>{
    self.empDetails=response;
    console.log(self.empDetails);
    self.name=self.empDetails.name,
    self.empCode=self.empDetails.empCode,
    self.email=self.empDetails.email,
    self.deptName=self.empDetails.deptName,
    self.proName=self.empDetails.proName,
    self.resultModel=true;
    self.display="";
  }, (err) => {
    console.log(err);
    self.display="";
  })
}
}
