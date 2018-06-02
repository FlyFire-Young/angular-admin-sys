import 'reflect-metadata';
import {Component} from '@angular/core';
import {scale, population} from './homeStatisticMapJsonData';
import {DataSet} from '@antv/data-set';

const DataSet = require('@antv/data-set');

@Component({
  selector: 'app-home-cf-s-map',
  templateUrl: './homeStatisticMap.html',
  styleUrls: ['../styles/index.css']
})
export class HomeStatisticMapComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  scale = scale;
  fields = ['gender'];
  color = ['gender', ['#1890ff', '#f04864']];

  constructor() {
    const sourceData = population;
    const tmp = [];
    const dates = [];
    sourceData.male.values.forEach((obj: any) => {
      if (dates.indexOf(obj.date) === -1) {
        dates.push(obj.date);
      }
      obj.age_groups.forEach((subObject: any) => {
        subObject.gender = 'male';
        subObject.date = obj.date;
        tmp.push(subObject);
      });
    });
    sourceData.female.values.forEach((obj: any) => {
      obj.age_groups.forEach((subObject: any) => {
        subObject.gender = 'female';
        subObject.date = obj.date;
        tmp.push(subObject);
      });
    });

    const dv = new DataSet.View().source(tmp);
    dv.transform({
      type: 'filter',
      callback(row) {
        return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
      }
    });

    this.data = dv.rows;
  }
}
