import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  template: `<div>
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
    ></highcharts-chart>
  </div>`,
  styles: [],
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    /* Your highcharts config goes here */
    title: {
      text: 'Cricket Match Scores of India',
    },
    subtitle: {
      text: 'Let us see the scores of India in last 5 ODIs and T20 cricket matches',
    },
    yAxis: {
      title: {
        text: 'Scores',
      },
    },
    xAxis: {
      title: {
        text: 'Matches',
      },
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1,
      },
    },
    series: [
      {
        name: 'ODIs',
        data: [340, 290, 356, 199, 289],
        type: 'line',
      },
      {
        name: 'T20s',
        data: [196, 205, 167, 140, 120],
        type: 'line',
      },
    ],
  };
}
