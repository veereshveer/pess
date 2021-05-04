import { Component, OnInit } from '@angular/core';

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
      console.log("user is valid");
    } else console.log("user is invalid");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
