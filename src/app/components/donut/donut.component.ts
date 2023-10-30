import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';

@Component({
  selector: 'component-donut',
  templateUrl: './donut.component.html',
  styles: [

  ]

})
export class DonutComponent implements OnInit{
  @Input() public titulo: string = "Sin título";
  @Input('labels') public doughnutChartLabels: string[] = [];
  @Input('data1') public data: number[]=[];

constructor(){
this.data=[250, 130, 70];
this.doughnutChartLabels=['label1','label2 ','label3'];
}
  ngOnInit(): void {
    this.doughnutChartData.datasets[0].data = this.data;
    //this.doughnutChartData.datasets[0].backgroundColor = this.backgroundColorDonut;
    this.doughnutChartData.labels = this.doughnutChartLabels;

  }

  // Doughnut

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ['#6857e6', '#009fee', '#f02059']
      },
    ],


  };
  public doughnutChartType: ChartType = 'doughnut';




}
