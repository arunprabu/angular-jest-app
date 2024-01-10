import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);

@Component({
  selector: 'app-scatterplot-chart',
  template: `<highcharts-chart
    [Highcharts]="Highcharts"
    [options]="chartOptions"
  ></highcharts-chart>`,
  styles: [],
})
export class ScatterplotChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'scatter',
      },
      title: {
        text: 'Sample Scatterplot',
      },
      subtitle: {
        text: 'Scatterplot for two sets of data',
      },
      xAxis: {
        title: {
          text: 'X-Axis',
        },
      },
      yAxis: {
        title: {
          text: 'Y-Axis',
        },
      },
      // legend: {
      //   layout: 'vertical',
      //   align: 'left',
      //   verticalAlign: 'top',
      //   x: 0,
      //   y: 0,
      //   backgroundColor: '#ddd',
      // },
      plotOptions: {
        scatter: {
          marker: {
            radius: 20,
            symbol: 'circle',
          },
          tooltip: {
            headerFormat: `<b>{series.name}</b><br>`,
            pointFormat: '{point.x} cm, {point.y} kg',
          },
        },
      },
      series: [
        {
          name: 'Data Series 1',
          color: 'rgba(0, 0, 255, .6)',
          data: [
            [161.2, 51.6],
            [167.5, 59.0],
            [159.5, 49.2],
            [157.0, 63.0],
            [155.8, 53.6],
          ],
        },
        {
          name: 'Data Series 2',
          color: 'rgba(255, 0, 0, .6)',
          data: [
            [174.0, 65.6],
            [175.3, 71.8],
            [193.5, 80.7],
            [186.5, 72.6],
            [187.2, 78.8],
          ],
        },
      ] as Highcharts.SeriesOptionsType[],
    };
  }
}
