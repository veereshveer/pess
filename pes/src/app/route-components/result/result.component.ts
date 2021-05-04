import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  allDeatil: any;
  loadChart: any;
  chartType: any;
  chartData: any;
  constructor(private service: ResultService) {
    this.empByDeptChart();
    this.empByproChart();
    this.empByJoinChart();
  }

  ngOnInit(): void {
  }

  getAllDeatils = () => {
    this.service.allDeatils()
      .subscribe((response) => {
        this.allDeatil = response
      }, (err) => {
        console.log(err);
      }
      )
  }

  empByDeptChart() {
    this.service.getEmpByDeptData()
      .subscribe((response) => {
        this.chartData = response,
        this.chartType=
      }, (err) => {
        console.log(err);
      })
  }
  empByproChart() {
    this.service.getEmpByProData()
      .subscribe((response) => {
        this.allDeatil = response
      }, (err) => {
        console.log(err);
      })
  }
  empByJoinChart() {
    this.service.getEmpByJoindata()
      .subscribe((response) => {
        this.allDeatil = response
      }, (err) => {
        console.log(err);
      })
  }

  loadChartData(){
    this.loadChart = new Chart({
      chart: {
        type: this.chartType
      },
      title: {
        text: 'Line Chart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          type: this.chartType,
          data: this.chartData
  
        }
      ]
    });
  }

  // empProChart = new Chart({
  //   chart: {
  //     type: 'bar'
  //   },
  //   title: {
  //     text: 'Employee by Department'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Line 1',
  //       type: 'bar',
  //       data: [1, 2, 3]

  //     }
  //   ]
  // });
  // empDeptChart = new Chart({
  //   chart: {
  //     type: 'bar'
  //   },
  //   title: {
  //     text: 'Employee by project'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Barchart',
  //       type: 'bar',
  //       data: [1, 2, 3]

  //     }
  //   ]
  // });
  // empJoinChart = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Line Chart'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Line 1',
  //       type: 'line',
  //       data: [1, 2, 3, 4, 5, 6]

  //     }
  //   ]
  // });
}
