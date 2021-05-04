import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DepartmentService } from '../department/department.service';
import { ProjectService } from '../project/project.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  displayModal = false;
  employeeId = '';
  employeeName = '';
  employeeEmail = '';
  employees: any;
  departments: any;
  projects : any;
  
  constructor(private service: EmployeeService, private proService :ProjectService,private DeptService : DepartmentService) {
    this.service.getEmployees()
    .subscribe((response) =>{
      this.employees = response;
      this.dtTrigger.next();
      console.log(response);
    }, (err) => {
      console.log(err);
    })
   }
  
  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  refreshModel=()=>{
    this.employeeId = '';
    this.employeeName = '';
    this.employeeEmail = '';
  }

  saveEmployee(){
    if (this.employeeId !== '') {
      this.editEmployee();
    }
    else{
      this.addEmployee();
    }
  }

  editEmployee(){
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
      this.service.updateEmployee({
        "id":this.employeeId,
        "empCode": "",
        "empFullName": this.employeeName,
        "empEmail": this.employeeEmail,
        "empJoinDate":" ",
        "empCreatedDate": dateString,
        "empCreatedBy": "userName",
        "empUpdatedDate": dateString,
        "empUpdatedBy": "userName",
        "deptId": " ",
        "empActive": "1"
      })
      .subscribe(response => {
        this.displayModal = false;
        var employee = this.employees.filter((employee : any) => employee.id == this.employeeId ? employee : null);
        this.employees[this.employees.indexOf(employee[0])] = response;
        this.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addEmployee(){
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
    this.service.addEmployee({
      "empCode": " ",
      "empFullName": this.employeeName,
      "empEmail": this.employeeEmail,
      "empJoinDate": dateString,
      "empCreatedDate": dateString,
      "empCreatedBy": "userName",
      "empUpdatedDate": dateString,
      "empUpdatedBy": "userName",
      "empActive": "1", 
       "deptId": "1"
  })
  .subscribe(response => {
    this.employees.push(response);
    this.displayModal = false;
    this.rerender();
    alert('Successfully Added!');
  }, err => {
    console.log(err);
  });
}
  
  loadEmployee = (id: string) => {
    this.loadEmployeeDeatils(id);
    // this.LoadDepartmentDeatils();
    // this.loadProjectDeatils();
  }
  loadEmployeeDeatils(id:string){
    this.service.getEmployees(id)
    .subscribe((response : any) =>{
      this.employeeName = response.empFullName;
      this.employeeEmail = response.empEmail;
      this.employeeId = response.id;
    }, (err) => {
        console.log(err);
    })
  }
  loadProjectDeatils(){
    this.proService.getProjects()
    .subscribe((response) =>{
      this.projects = response;
      this.dtTrigger.next();
      console.log(response);
    }, (err) => {
      console.log(err);
    })
  }
  LoadDepartmentDeatils(){
    this.DeptService.getDepartments()
    .then((response) =>{
      this.employees = response;
      this.dtTrigger.next();
      console.log(response);
    })
    .catch( (err) => {
      console.log(err);
    })
  }
  deleteEmployee(id:string, name:string, index: number) {
    if (confirm('Sure you want to delete '+ name +' Employee ?')) {
        this.service.deleteEmployee(id)
        .subscribe(response => {
          this.employees.splice(index, 1);
          this.rerender();
        }, err => {
          console.log(err);
        });
    }
  }
  
     // define the JSON of data
     public countries: { [key: string]: Object; }[] = [
      { Name: 'Australia', Code: 'AU' },
          { Name: 'Bermuda', Code: 'BM' },
          { Name: 'Canada', Code: 'CA' },
          { Name: 'Cameroon', Code: 'CM' },
          { Name: 'Denmark', Code: 'DK' },
          { Name: 'France', Code: 'FR' },
          { Name: 'Finland', Code: 'FI' },
          { Name: 'Germany', Code: 'DE' },          
      ];
      // maps the local data column to fields property
      public localFields: Object = { text: 'Name', value: 'Code' };
      // set the placeholder to MultiSelect Dropdown input element
      public localWaterMark: string = 'Select countries';
      public value: string[] = ['AU'];

}
