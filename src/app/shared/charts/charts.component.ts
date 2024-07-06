import { AfterViewInit, Component, Input } from '@angular/core';
declare let Plotly: any;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @Input() data: any;

  ngAfterViewInit(): void {
    Plotly.newPlot(this.data?.id, this.data.dataSource.values,this.data.dataSource.layout,this.data.dataSource.config);
  }
}
