import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Management';
  navigationMenu = [
    // {'name': 'login', 'route': 'login'},
    {'name': 'Department', 'route': ''},
    {'name': 'Project', 'route': 'project'},
    {'name': 'Employee', 'route': 'employee'},
    {'name': 'Report', 'route': 'report'},
    {'name': 'Result', 'route': 'result'},
    {'name': 'Search', 'route': 'search'}
  ];
}
