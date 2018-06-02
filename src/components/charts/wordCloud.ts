import {Component, OnInit} from '@angular/core';
import {DataSet} from '@antv/data-set';
import {jsonData, scale} from './data/wordCloudJsonData';

@Component({
  templateUrl: './wordCloud.html',
  styleUrls: ['../styles/index.css'],
})
export class WordCloudComponent implements OnInit {
  scale = scale;
  data = [];

  constructor() {
    const dv = new DataSet.View().source(jsonData);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [640, 400],
      font: 'Verdana',
      padding: 0,
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random == 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (80 - 24) + 24;
        }
        return 0;
      }
    });
    this.data = dv.rows;
  }

  ngOnInit(): void {
  }
}
