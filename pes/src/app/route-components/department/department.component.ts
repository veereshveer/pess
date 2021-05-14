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
  displayModal:boolean = false;
  departmentId : String = '';
  departmentName: String = '';
  departmentDescription: String = '';
  departmentLocation : String = '';
  departments: any=[];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: DepartmentService) {
    let self =this;
    self.service.getDepartments()
    .then((response) =>{
      self.departments = response;
      self.dtTrigger.next();
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
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  refreshModel=()=>{
    let self =this;
    self.departmentId = '';
    self.departmentName = '';
    self.departmentDescription = '';
    self.departmentLocation = '';
  }
  saveDepartment(){
    let self =this;
    if (self.departmentId !== '') {
      self.editDepartment();
    }
    else{
      self.addDepartment();
    }
  }
  editDepartment(){
    let self =this;
    self.departmentId;
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.updateDepartment({
        "name": self.departmentName,
        "description": self.departmentDescription,
        "location": self.departmentLocation,
        "createdDate": dateString,
        "createdBy": "userName",
        "updatedDate": dateString,
        "updatedBy": "userName",
        "active": "1"
      },self.departmentId)
      .subscribe(response => {
        self.displayModal = false;
        var department = self.departments.filter((department : any) => department.deptId == self.departmentId ? department : null);
        self.departments[self.departments.indexOf(department[0])] = response;
        self.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addDepartment(){
    let self =this;
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.addDepartment({
      "name": self.departmentName,
      "description": self.departmentDescription,
      "location": self.departmentLocation,
      "createdDate": dateString,
      "createdBy": "userName",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "active": "1"
  })
  .subscribe(response => {
    self.departments.push(response);
    self.displayModal = false;
    self.rerender();
    alert('Successfully Added!');
  }, err => {
    console.log(err);
  });
}
  
  loadDepartment = (id: string) => {
    let self =this;
    self.service.getDepartments(id)
      .then((response : any) =>{
        self.departmentName = response.name;
        self.departmentDescription = response.description;
        self.departmentLocation = response.location;
        self.departmentId = response.deptId;
      })
      .catch((err) => {
        console.log(err);
     }
      )

  }
  
  deleteDepartment(id:string, name:string, index: number) {
    let self =this;
    if (confirm('Sure you want to delete '+ name +' Department ?')) {
      self.service.deleteDepartment(id)
        .subscribe(response => {
          self.departments.splice(index, 1);
          self.rerender();
        }, err => {
          console.log(err);
        });
    }
  }
}
