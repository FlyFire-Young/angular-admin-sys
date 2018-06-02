import {Component, OnInit} from '@angular/core';
import {data, scale} from './data/foldLineDiagramData';
import {blockData} from './data/blockColumnarData';
import {roseData} from './data/roseRingDiagramData';
import {bubbleData, colorMap, laeblFormatter, scaleBubble} from './data/bubbleGraphData';
import {IAAverages, IAData, IAPointStyle, IAScale, IATooltipOpts} from './data/intervalAreaData';

@Component({
  templateUrl: './viserCharts.html',
  styleUrls: ['../styles/index.css'],
})
export class ViserChartsComponent implements OnInit {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;

  blockData = blockData;
  adjust = [{
    type: 'dodge',
    marginRatio: 1 / 32,
  }];

  roseData = roseData;
  sectorStyle = {
    stroke: '#fff',
    lineWidth: 1,
  };

  bubbleData = bubbleData;
  scaleBubble = scaleBubble;
  axisLabel = {
    formatter: laeblFormatter,
  };
  pointColor = ['continent', val => colorMap[val]];
  pointSize = ['Population', [4, 65]];
  pointStyle = ['continent', {
    lineWidth: 1,
    strokeOpacity: 1,
    fillOpacity: 0.3,
    opacity: 0.65,
    stroke: val => colorMap[val],
  }];

  iadata = IAData;
  iaaverages = IAAverages;
  iascale = IAScale;
  iapointStyle = IAPointStyle;
  iatooltipOpts = IATooltipOpts;

  ngOnInit(): void {
  }
}
