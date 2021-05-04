import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  displayModal = false;
  departmentId = '';
  departmentName = '';
  departmentDescription = '';
  departmentLocation = '';
  departments: any;

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: DepartmentService) {

    this.service.getDepartments()
    .then((response) =>{
      this.departments = response;
      this.dtTrigger.next();
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
    
  }

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
    this.departmentId = '';
    this.departmentName = '';
    this.departmentDescription = '';
    this.departmentLocation = '';
  }
  saveDepartment(){
    if (this.departmentId !== '') {
      this.editDepartment();
    }
    else{
      this.addDepartment();
    }
  }
  editDepartment(){
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
      this.service.updateDepartment({
        "id":this.departmentId,
        "deptName": this.departmentName,
        "deptDescription": this.departmentDescription,
        "deptLocation": this.departmentLocation,
        "deptCreatedDate": dateString,
        "deptCreatedBy": "userName",
        "deptUpdatedDate": dateString,
        "deptUpdatedBy": "userName",
        "deptActive": "1"
      })
      .subscribe(response => {
        this.displayModal = false;
        var department = this.departments.filter((department : any) => department.id == this.departmentId ? department : null);
        this.departments[this.departments.indexOf(department[0])] = response;
        this.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addDepartment(){
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
    this.service.addDepartment({
      "deptName": this.departmentName,
      "deptDescription": this.departmentDescription,
      "deptLocation": this.departmentLocation,
      "deptCreatedDate": dateString,
      "deptCreatedBy": "userName",
      "deptUpdatedDate": dateString,
      "deptUpdatedBy": "userName",
      "deptActive": "1"
  })
  .subscribe(response => {
    this.departments.push(response);
    this.displayModal = false;
    this.rerender();
    alert('Successfully Added!');
  }, err => {
    console.log(err);
  });
}
  
  
  loadDepartment = (id: string) => {
      this.service.getDepartments(id)
      .then((response : any) =>{
        this.departmentName = response.deptName;
        this.departmentDescription = response.deptDescription;
        this.departmentLocation = response.deptLocation;
        this.departmentId = response.id;
      })
      .catch((err) => {
        console.log(err);
     }
      )
  }
  
  deleteDepartment(id:string, name:string, index: number) {
    if (confirm('Sure you want to delete '+ name +' Department ?')) {
        this.service.deleteDepartment(id)
        .subscribe(response => {
          this.departments.splice(index, 1);
          this.rerender();
        }, err => {
          console.log(err);
        });
    }
  }
}
