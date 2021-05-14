import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DepartmentService } from '../department/department.service';
import { ProjectService } from '../project/project.service';
import { EmployeeService } from './employee.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public dropdownList: any;
  public selectedItems: any;
  public selectedItemsids: any;
  public projectListId: any;
  public dropdownSettings !: IDropdownSettings;
  public displayModal :boolean= false;
  public employeeId: any;
  public employeeName: String ='';
  public employeeEmail: String='';
  public deptSelected: String='';
  public employees: any;
  public deptlist: any;
  public projects: any;
  public projectsList: any;
  public employeeUserName:String='';
  public employeePassword:String = '';
  public logInModel:boolean = false;

  ngOnInit() {
  }

  constructor(private service: EmployeeService, private proService: ProjectService, private DeptService: DepartmentService) {
   let self = this;
    self.service.getEmployees()
      .subscribe((response) => {
        self.employees = response;
        self.dtTrigger.next();
      }, (err) => {
        console.log(err);
      })
  }

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  rerender(): void {
    let self = this;
    self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      self.dtTrigger.next();
    });
  }

  refreshModel = () => {
    let self = this;
    self.LoadDepartmentDeatils();
    self.loadProjectDeatils();
    self.employeeId = '';
    self.employeeName = ' ';
    self.employeeEmail = '';
    self.deptSelected = ' ';
  }

  saveEmployee() {
    let self = this;
    if (self.employeeId !== '') {
      self.editEmployee();
    }
    else {
      self.addEmployee();
    }
  }

  editEmployee() {
    let self = this;
    self.projectListId = []
    self.selectedItems.forEach((ids: any) => {
      self.projectListId.push(ids.item_id);
    });
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.updateEmployee({
      "empCode": " ",
      "fullName": self.employeeName,
      "email": self.employeeEmail,
      "empJoinDate": " ",
      "createdDate": " ",
      "createdBy": " ",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "deptId": self.deptSelected,
      "active": " ",
      "projectIds": self.projectListId
    }, self.employeeId).subscribe(response => {
      self.displayModal = false;
      var employee = self.employees.filter((employee: any) => employee.empId == self.employeeId ? employee : null);
      self.employees[self.employees.indexOf(employee[0])] = response;
      self.rerender();
      alert('Successfully Updated!');
    }, err => {
      console.log(err);
    });
  }

  addEmployee() {
    let self = this;
    self.projectListId = []
    self.selectedItems.forEach((ids: any) => {
      self.projectListId.push(ids.item_id);
    });
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    self.service.addEmployee({
      "empCode": " ",
      "fullName": self.employeeName,
      "email": self.employeeEmail,
      "empJoinDate": dateString,
      "createdDate": dateString,
      "createdBy": "userName",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "deptId": self.deptSelected,
      "active": "1",
      "projectIds": self.projectListId
    }).subscribe(response => {
      self.employees.push(response);
      self.displayModal = false;
      self.rerender();
      alert('Successfully Added!');
    }, err => {
      console.log(err);
    });
  }

  loadEmployee = (id: string) => {
    let self = this;
    self.loadEmployeeDeatils(id);
    self.LoadDepartmentDeatils();
  }

  loadEmployeeDeatils(id: string) {
    let self = this;
    self.service.getEmployees(id)
      .subscribe((response: any) => {
        console.log(response);
        self.employeeName = response.fullName;
        self.employeeEmail = response.email;
        self.employeeId = response.empId;
        self.deptSelected = response.deptId;
        self.selectedItemsids = response.projectIds;
        self.loadProjectDeatilsIds(response.projectIds);

      }, (err) => {
        console.log(err);
      })
  }

  loadProjectDeatils() {
    let self = this;
    self.proService.getProjects()
      .subscribe((response) => {
        self.projects = response;
        self.loadMultiSelect(self.projects);
        return self.projects;
      }, (err) => {
        console.log(err);
      })
  }

  loadProjectDeatilsIds(projectIds:any) {
    let self = this;
    self.proService.getProjects()
      .subscribe((response) => {
        self.projects = response;
        self.loadMultiSelect(self.projects);
        self.selectedItems = [];
        for (let projectoption of self.projects) {
          projectIds.forEach((id: any) => {
            if (projectoption.projectId == id) {
              self.selectedItems.push({ item_id: projectoption.projectId, item_text: projectoption.name });
            }
          });
        }
      }, (err) => {
        console.log(err);
      })
  }

  LoadDepartmentDeatils() {
    let self = this;
    self.DeptService.getDepartments()
      .then((response) => {
        self.deptlist = response;
        console.log(self.deptlist);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteEmployee(id: string, name: string, index: number) {
    let self =this;
    if (confirm('Sure you want to delete ' + name + ' Employee ?')) {
      self.service.deleteEmployee(id)
        .subscribe(response => {
          self.employees.splice(index, 1);
          self.rerender();
        }, err => {
          console.log(err);
        });
    }
  }

  loadMultiSelect(projects: any) {
    let self =this;
    self.dropdownList = [];
    for (let projectoption of projects) {
      self.dropdownList.push({ item_id: projectoption.projectId, item_text: projectoption.name });
    }
    console.log(self.dropdownList);

    self.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  loadLogIn(id: string) {
    let self =this;
    self.employeeUserName = '';
    self.employeePassword ='';
    self.employeeId='';
    self.service.getLogIn(id)
      .subscribe((response: any) => {
        console.log(response);
        self.employeeUserName = response.userName;
        self.employeePassword = response.password;
        self.employeeId = response.empId;
      }, (err) => {
        console.log(err);
      })
  }

  saveLogIn(){
   let self = this;
    var date = new Date();
    var dateString = date.getDate() + '/' +(date.getMonth()+1) + '/' + date.getFullYear();
    self.service.editLogIn({
      "userName" : self.employeeUserName,
      "password" : self.employeePassword
    },self.employeeId).subscribe(response => {
      self.logInModel = false;
      alert('Successfully Added!');
    }, err => {
      console.log(err);
    });
  }
  
}
