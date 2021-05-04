import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent
  }
];

@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ChartModule
  ]
})
export class ReportModule { }
