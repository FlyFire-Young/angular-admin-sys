import {Component} from '@angular/core';
import {actualData, expectData, pyramidOpts, tooltipOpts, pyramidOpts1} from "./contrastiveFunnelChartsJsonData";

@Component({
  selector: 'app-home-cf-chart',
  templateUrl: './contrastiveFunnelCharts.html',
  styleUrls: ['../styles/index.css']
})
export class ContrastiveFunnelChartsComponent {
  forceFit: boolean = true;
  height: number = 400;
  showTitle: boolean = false;
  expectData = expectData;
  actualData = actualData;
  tooltipOpts = tooltipOpts;
  pyramidOpts = pyramidOpts;
  pyramidOpts1 = pyramidOpts1;
}
