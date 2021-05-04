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
  displayModal = false;
  projectId = '';
  projectCode = '';
  projectName = '';
  projectDescription = '';
  projects: any;


  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: ProjectService) { 
    this.service.getProjects()
    .subscribe((response) =>{
      this.projects = response;
      this.dtTrigger.next();
      console.log(response);
    }, (err) => {
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
    this.projectId = '';
    this.projectName = '';
    this.projectDescription = '';
  }

  saveProject(){
    if (this.projectId !== '') {
      this.editProject();
    }
    else{
      this.addProject();
    }
  }
  editProject(){
    
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
      this.service.updateProject({
        "id":this.projectId,
        "proCode": this.projectCode,
        "proName": this.projectName,
        "proDescription": this.projectDescription,
        "proCreatedDate": dateString,
        "proCreatedBy": "userName",
        "proUpdatedDate": dateString,
        "proUpdatedBy": "userName",
        "proActive": "1"
      })
      .subscribe(response => {
        this.displayModal = false;
        var project = this.projects.filter((project : any) => project.id == this.projectId ? project : null);
        this.projects[this.projects.indexOf(project[0])] = response;
        this.rerender();
        alert('Successfully Updated!');
      }, err => {
        console.log(err);
      });
  }

  addProject(){
    var date = new Date();
    var dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
    this.service.addProject({
      "proCode": "",
      "proName": this.projectName,
      "proDescription": this.projectDescription,
      "proCreatedDate": dateString,
      "proCreatedBy": "userName",
      "proUpdatedDate": dateString,
      "proUpdatedBy": "userName",
      "proActive": "1"
  })
  .subscribe(response => {
    this.projects.push(response);
    this.displayModal = false;
    this.rerender();
    alert('Successfully Added!');
  }, err => {
    console.log(err);
  });
}
  
  loadProject = (id: string) => {
    this.service.getProjects(id)
    .subscribe((response : any) =>{
      this.projectName = response.proName;
      this.projectDescription = response.proDescription;
      this.projectId = response.id;
      this.projectCode = response.proCode;
    }, (err) => {
        console.log(err);
    })
}

deleteProject(id:string, name:string, index: number) {
  if (confirm('Sure you want to delete '+ name +' project ?')) {
      this.service.deleteProject(id)
      .subscribe(response => {
        this.projects.splice(index, 1);
      }, err => {
        console.log(err);
      });
  }
}

}
