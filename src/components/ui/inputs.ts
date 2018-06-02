import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './inputs.html',
  styleUrls: ['../styles/index.css'],
})
export class InputsComponent implements OnInit {
  value: string;
  inputValue: string = 'my site';
  inputValueTe: string;
  demoValue = 100;
  formatterPercent = value => `${value} %`;
  parserPercent = value => value.replace(' %', '');
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');

  ngOnInit() {

  }
}
