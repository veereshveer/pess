import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  counts: any;
  dtTrigger: any;
  summary: any;
  details: any;

  constructor( private service : ReportService) {
      this.loadcount();
      this.loadsummary();
      this.loadDetails();
   }

  ngOnInit(): void {
  }
   loadcount = () => {
    this.service.getCount ()
    .then((response) =>{
      this.counts = response;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
   loadsummary = () => {
    this.service.getSummary ()
    .subscribe((response) =>{
      this.summary = response;
      console.log(response);
    }, (err) => {
      console.log(err);
    })
  }
  
  loadDetails = () => {
    this.service.getDetails ()
    .subscribe((response) =>{
      this.details = response;
      console.log(response);
    }, (err) => {
      console.log(err);
    })
  }
  
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Barchart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type : 'bar',
        data: [1, 2, 3]
      
      }
    ]
  });
 
}


