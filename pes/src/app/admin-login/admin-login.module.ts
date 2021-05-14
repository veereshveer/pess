import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: AdminLoginComponent
//   }
// ];
@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule ],
  declarations: [ AppComponent, AdminLoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AdminLoginModule {

 }
