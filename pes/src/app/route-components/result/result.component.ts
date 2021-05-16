import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Chart } from 'angular-highcharts';
import { Subject } from 'rxjs/internal/Subject';
import { ReportService } from '../report/report.service';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  public deptSummary: any;
  public resultAllDeatil: any;
  public loadChart: any;
  public chartType: any;
  public chartData: any;
  public deptName: string[] = [];
  public deptData: number[] = [];
  public proData: number[] = [];
  public proName: string[] = [];
  public empByProChart: any;
  public empByDeptChart: any;
  public empByJoinChart: any;
  public allDeatil: any;
  public ProSummary: any;
  public joinSummary: any;
  public joinData: number[] = [];
  public joinDate: string[] = [];

  @ViewChild(DataTableDirective)
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private service: ResultService, private reportService: ReportService) {
    let self = this;
    self.getAllDeatils();
    self.empDeptChart();
    self.empProChart();
    self.empJoinChart();
  }

  ngOnInit(): void {
  }

  rerender(): void {
    let self = this;
    self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      self.dtTrigger.next();
    });
  } 

  getAllDeatils = () => {
    let self = this;
    self.reportService.getDetails()
      .subscribe((response) => {
        self.resultAllDeatil = response;
        self.dtTrigger.next();
        self.rerender();
      }, (err) => {
        console.log(err);
      }
      )
  }

  empDeptChart() {
    let self = this;
    self.reportService.getDeptSummary()
      .subscribe((response) => {
        self.deptSummary = response;
        for (var val of self.deptSummary) {

          self.deptData.push(val.countEmpDept);
          self.deptName.push(val.deptName);
        }
        self.loadDeptChart(self.deptData, self.deptName);
      }, (err) => {
        console.log(err);
      })
  }

  empJoinChart() {
    let self = this;
    self.service.getEmpByJoindata()
      .subscribe((response) => {
        self.joinSummary = response;
        for (var val of self.joinSummary) {
          self.joinData.push(val.empCount);
          self.joinDate.push(val.joinDate);
        }
        console.log(self.joinData);
        console.log(self.joinDate);
        self.loadJoinChart(self.joinData, self.joinDate);
      }, (err) => {
        console.log(err);
      })
  }

  loadDeptChart = (data: any, name: any) => {
    let self = this;
    self.empByDeptChart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Employee by departments'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: " Department names",
          type: 'column',
          data: data,

        }
      ],
      yAxis: [{
        title: {
          text: 'Range of employees'
        },
      }],
      xAxis: {
        categories: name,
      },
      colors: ['cadetblue', 'red', 'green'],
    });
  }
  
  loadJoinChart(data: any, date: any) {
    let  self  = this;
    self.empByJoinChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Employee Joindata'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Employee join date",
          type: 'line',
          data: data
        }
      ],
      yAxis: [{
        title: {
          text: 'Number of employees'
        },
      }],
      xAxis: {
        categories: date,
      },
      colors: ['cadetblue', 'red', 'green'],
    });
  }

  empProChart() {
    let self = this;
    self.reportService.getProSummary()
      .subscribe((response) => {
        self.ProSummary = response;
        for (var val of self.ProSummary) {
          self.proData.push(val.countEmpPro);
          self.proName.push(val.proName);
        }
        self.loadProChart(self.proData, self.proName);
      }, (err) => {
        console.log(err);
      })
  }

  loadProChart(data: any, name: any) {
    let self = this;
    self.empByProChart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Employee by project'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Project names",
          type: 'column',
          data: data
        }
      ],
      yAxis: [{
        title: {
          text: 'Number of employees'
        },
      }],
      xAxis: {
        categories: name,
      },
      colors: ['cadetblue', 'red', 'green'],
    });
  }

}