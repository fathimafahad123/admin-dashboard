import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  // property binding
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    // give chart configuration data from high chart
    this.chartOptions={
      
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['Mearn', 'Python', 'Data science', 'Testing', 'Flutter', 'Asp.net',
            'Big data', 'Java_spring', 'AI', 'ML' ]
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'placements: {point.y}'
    },
    title: {
        text: 'Yearly placements Analysis 2022-2023',
        align: 'center'
    },
    subtitle: {
        text: 'Luminar TechnoLab',
        align: ''
    },
    legend: {
        enabled: false
    },
    credits:{
       enabled:false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
  }}

}
