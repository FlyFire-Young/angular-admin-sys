import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './autocompletes.html',
  styleUrls: ['../styles/index.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompletesComponent implements OnInit {
  inputValue: string;
  options = [];

  inputValueCus: string;
  optionsCus = [];

  inputValueSer: string;
  optionGroups: any[];

  onChangeSer(value: any): void {
    console.log(value);
  }

  onInput(value: string): void {
    this.options = value ? [
      value,
      value + value,
      value + value + value
    ] : [];
  }

  onChange(value: string): void {
    if (!value || value.indexOf('@') >= 0) {
      this.optionsCus = [];
    } else {
      this.optionsCus = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.optionGroups = [{
        title: '话题',
        children: [{
          title: 'AntDesign',
          count: 10000
        }, {
          title: 'AntDesign UI',
          count: 10600
        }]
      }, {
        title: '问题',
        children: [{
          title: 'AntDesign UI 有多好',
          count: 60100
        }, {
          title: 'AntDesign 是啥',
          count: 30010
        }]
      }, {
        title: '文章',
        children: [{
          title: 'AntDesign 是一个设计语言',
          count: 100000
        }]
      }];
    }, 1000);
  }
}
