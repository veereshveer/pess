import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  public displayModal: boolean = false;
  public projectId: String = "";
  public projectCode: String = '';
  public projectName: String = '';
  public projectDescription: String = '';
  public projects: any = [];
  public projectform: FormGroup;
  public submitted:boolean = false;

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: ProjectService, private proValid: FormBuilder) {
    let self = this;
    self.service.getProjects()
      .subscribe((response) => {
        self.projects = response;
        self.dtTrigger.next();
        console.log(response);
      }, (err) => {
        console.log(err);
      })
      this.projectform = this.proValid.group({
      })
  } 

  ngOnInit(): void {
    this.projectform = this.proValid.group({
      projectName: ["", [Validators.required]],
      projectdescription: ["", Validators.required],
      projectId: ["", Validators.required]
    })
  }

  get h() {
    return this.projectform.controls;
  }

  onReset() {
    this.submitted = false;
    this.displayModal = false;
    this.projectform.reset();
  }

  rerender(): void {
    let self = this;
    self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      self.dtTrigger.next();
    });
  }

  refreshModel = () => {
    let self = this;

  }

  saveProject() {
    let self = this;
    console.log(self.projectform.value.projectId);
    self.submitted=true;
       if (self.projectform.value.projectId !== '') {
      self.editProject();
    }
    else {
      self.addProject();
    }
  }

  editProject() {
    let self = this;
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    self.service.updateProject({
      "projectCode": "",
      "name": self.projectform.value.projectName,
      "description": self.projectform.value.projectdescription,
      "createdDate": dateString,
      "createdBy": "userName",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "active": "1"
    }, self.projectform.value.projectId)
      .subscribe(response => {
        self.displayModal = false;
        var project = self.projects.filter((project: any) => project.projectId == self.projectform.value.projectId ? project : null);
        self.projects[self.projects.indexOf(project[0])] = response;
        self.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addProject() {

    let self = this;
    var date = new Date();
    var dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    self.service.addProject({
      "projectCode": "",
      "name": self.projectform.value.projectName,
      "description": self.projectform.value.projectdescription,
      "createdDate": dateString,
      "createdBy": "userName",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "active": "1"
    })
      .subscribe(response => {
        self.projects.push(response);
        self.displayModal = false;
        self.rerender();
        alert('Successfully Added!');
      }, err => {
        console.log(err);
      });
  }

  loadProject = (id: string) => {
    let self = this;
    self.service.getProjects(id)
      .subscribe((response: any) => {
        self.projectform = new FormGroup({
          projectName: new FormControl(response.name),
          projectdescription: new FormControl(response.description),
          projectId: new FormControl(response.projectId)
         });
      }, (err) => {
        console.log(err);
      })
  }

  deleteProject(id: string, name: string, index: number) {
    let self = this;
    if (confirm('Sure you want to delete ' + name + ' project ?')) {
      self.service.deleteProject(id)
        .subscribe(response => {
          self.projects.splice(index, 1);
          self.rerender();
        }, err => {
          console.log(err);
        });
    }
  }

}
