import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  username: any;
  password: any;

  verifyUser() {
    if (this.username == "veeresh" && this.password == "veeresh123") {
     alert("user is valid");
     this.router.navigate(['list-user']);
    } else alert("user is invalid");
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
