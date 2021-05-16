import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: ResultComponent
  }
];

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ChartModule,  
    DataTablesModule
  ]
})
export class ResultModule { }
