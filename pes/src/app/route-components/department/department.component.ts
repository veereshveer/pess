import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
  public displayModal:boolean = false;
  public departmentId : String = '';
  public departmentName: String = '';
  public departmentDescription: String = '';
  public departmentLocation : String = '';
  public departments: any=[];
  public departform: FormGroup;
  public submitted=false;

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: DepartmentService, private validation: FormBuilder) {
    let self =this;
    this.departform=self.validation.group({
    })
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
    this.departform=this.validation.group({​​​​​​​​
      name:["",[Validators.required]],
      description:["",[Validators.required]],
      location:["",[Validators.required]],  
      deptId:["",[Validators.required]]
    }​​​​​​​​)
  }

  get h(){
    return this.departform.controls; 
  }
   
  onReset(){
    this.submitted=false;
    this.displayModal = false;
    this.departform.reset();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  refreshModel=()=>{
    let self =this;
    this.departform=this.validation.group({​​​​​​​​
      name:["",[Validators.required]],
      description:["",[Validators.required]],
      location:["",[Validators.required]],  
      deptId:["",[Validators.required]]
    }​​​​​​​​)
  }

  saveDepartment(){
    console.log(this.departform.value.deptId);
    let self =this;
    self.submitted=true;

    if (this.departform.value.deptId !== '') {
      self.editDepartment();
    }
    else{
      self.addDepartment();
    }
  }
  
  editDepartment(){
    let self =this;
    console.log(self.departform.value.name);
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.updateDepartment({
        "name":self.departform.value.name,
        "description": self.departform.value.description,
        "location": self.departform.value.location,
        "createdDate": dateString,
        "createdBy": "userName",
        "updatedDate": dateString,
        "updatedBy": "userName",
        "active": "1"
      },self.departform.value.deptId)
      .subscribe(response => {
        self.displayModal = false;
        var department = self.departments.filter((department : any) => department.deptId == self.departform.value.deptId ? department : null);
        self.departments[self.departments.indexOf(department[0])] = response;
        self.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addDepartment(){
    let self =this;
    console.log(this.departform.value.name);
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.addDepartment({
      "name": this.departform.value.name,
      "description": this.departform.value.description,
      "location": this.departform.value.location,
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
     self.departform = new FormGroup({
          name: new FormControl(response.name),
          description: new FormControl(response.description),
          location: new FormControl(response.location),
          deptId :new FormControl(response.deptId)
         });
      })
      .catch((err) => {
        console.log(err);
     })
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
