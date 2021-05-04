import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { DepartmentComponent } from './department.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ]
})
export class DepartmentModule { }
