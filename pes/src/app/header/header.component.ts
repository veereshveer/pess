import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() projectTitle = "";
  date = new Date();
  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

}
