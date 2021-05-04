import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DepartmentComponent } from './route-components/department/department.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent

  },
  {
    path: 'project',
    loadChildren: () => import('./route-components/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./route-components/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./route-components/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./route-components/report/report.module').then(m => m.ReportModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./route-components/result/result.module').then(m => m.ResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
