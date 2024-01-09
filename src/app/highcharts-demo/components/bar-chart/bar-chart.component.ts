import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  template: `
    <div>
      <highcharts-chart
        [Highcharts]="Highcharts"
        [options]="chartOptions"
      ></highcharts-chart>
    </div>
  `,
  styles: [],
})
export class BarChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Centuries of Top Batsmen',
      },
      subtitle: {
        text: 'Top 6 Players who scored more centuries',
      },
      xAxis: {
        categories: [
          'Virat Kohli',
          'Sachin Tendulkar',
          'Rohit Sharma',
          'Rickey Ponting',
          'AB De Villiers',
          'Chris Gayle',
        ],
        opposite: true
      },
      yAxis: {
        title: {
          text: 'Centuries',
        },
        opposite: true,
        reversed: true
      },
      series: [
        {
          name: 'Centuries Scored',
          // data: [50, 49, 31, 30, 25, 25], // for bar chart this is enough.
          // what if we want bars in diff colors?
          data: [
            { y: 50, color: 'red' },
            { y: 49, color: 'green' },
            { y: 31, color: 'blue' },
            { y: 30, color: 'orange' },
            { y: 25, color: 'purple' },
            { y: 25, color: 'gray' },
          ],
        },
      ] as Highcharts.SeriesOptionsType[],
    };
  }
}
