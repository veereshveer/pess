import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent implements OnInit {
  public username: String = '';
  public password: String = '';

  verifyUser() {
    let  self = this;
    if (self.username == "veeresh" && self.password == "veeresh123") {
     alert("user is valid");
     self.router.navigate(['list-user']);
    } else alert("user is invalid");
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
