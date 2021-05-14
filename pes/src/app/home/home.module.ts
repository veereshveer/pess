import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DepartmentComponent } from '../route-components/department/department.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidebarComponent,
    // DepartmentComponent,
    // AdminLoginComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    // HomeRoutingModule,
    // BrowserModule,
    // AppRoutingModule,
    // NgbModule,
    // FormsModule,
    // CommonModule,
    // HttpClientModule,
    // DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }
