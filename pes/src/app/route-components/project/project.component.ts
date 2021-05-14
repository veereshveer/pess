import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  displayModal: boolean = false;
  projectId: String = "";
  projectCode: String = '';
  projectName: String = '';
  projectDescription: String = '';
  projects: any = [];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: ProjectService) {
    let self = this;
    self.service.getProjects()
      .subscribe((response) => {
        self.projects = response;
        self.dtTrigger.next();
        console.log(response);
      }, (err) => {
        console.log(err);
      })
  }

  ngOnInit(): void {
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
    self.projectId = '';
    self.projectName = '';
    self.projectDescription = '';
  }

  saveProject() {
    let self = this;
    if (self.projectId !== '') {
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
      "projectCode": self.projectCode,
      "name": self.projectName,
      "description": self.projectDescription,
      "createdDate": dateString,
      "createdBy": "userName",
      "updatedDate": dateString,
      "updatedBy": "userName",
      "active": "1"
    }, self.projectId)
      .subscribe(response => {
        self.displayModal = false;
        var project = self.projects.filter((project: any) => project.projectId == self.projectId ? project : null);
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
      "name": self.projectName,
      "description": self.projectDescription,
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
        self.projectName = response.name;
        self.projectDescription = response.description;
        self.projectId = response.projectId;
        self.projectCode = response.projectCode;
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
