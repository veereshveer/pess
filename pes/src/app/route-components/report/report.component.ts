import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {

  public counts: any=[];
  public dtTrigger: any;
  public proSummary: any=[];
  public deptSummary: any=[];
  public details: any=[];
  public chart: any;
  public data: any=[];

  constructor(private service: ReportService) {
    let slef = this;
    slef.loadcount();
    slef.loadDeptSummary();
    slef.loadProSummary();
    slef.loadDetails();
  }

  ngOnInit(): void {
  }

  loadcount = () => {
    let self = this;
    self.service.getCount()
      .then((response) => {
        self.counts = response;
        self.data = [self.counts.empCount, self.counts.deptCount, self.counts.proCount]
        self.loadchart(self.data);
        console.log(self.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  loadDeptSummary = () => {
    let self = this;
    self.service.getDeptSummary()
      .subscribe((response) => {
        self.deptSummary = response;
        console.log(response);
      }, (err) => {
        console.log(err);
      })
  }

  loadProSummary = () => {
    let self = this;
    self.service.getProSummary()
      .subscribe((response) => {
        self.proSummary = response;
        console.log(response);
      }, (err) => {
        console.log(err);
      })
  }

  loadDetails = () => {
    let self = this;
    self.service.getDetails()
      .subscribe((response) => {
        self.details = response;
        console.log(response);
      }, (err) => {
        console.log(err);
      })
  }

  loadchart = (data: any) => {
    let self = this;
    self.chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Office management'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Modules",
          type: 'column',
          data: data,
        }
      ],
      yAxis: [{
        title: {
          text: 'Number of employees'
        },
      }],
      xAxis: {
        categories: ['No.of Employee', 'No.of Department', 'No.of Project']
      },
      colors: ['cadetblue', 'red', 'green'],
    });
  }
}