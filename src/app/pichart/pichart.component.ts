import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pichart',
  templateUrl: './pichart.component.html',
  styleUrls: ['./pichart.component.css']
})
export class PichartComponent {
    // property binding
    Highcharts=Highcharts
    chartOptions={}
    constructor(){
      this.chartOptions={



        chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Average Student Admission 2022-2023',
          align: 'center'
      },
      
    accessibility: {
        point: {
            valueSuffix: '%'
        }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
            }
          },
          credits:{
            enabled:false
          },
          series: [{
              type: 'pie',
              name: 'Share',
              data: [
                  ['Mearn', 23],
                  ['Python', 12],
                  ['Asp.net', 8],
                  ['Testing', 20],
                  ['flutter', 7],
                  ['Big data',30]
              ]
          }]
      }
    }

}
