import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './selectR.html',
  styleUrls: ['../styles/index.css'],
})
export class SelectRComponent implements OnInit {
  selectedValue = 'lucy';
  listOfOption = [];
  listOfTagOptions = [];
  selectedValueG = 'lucy';
  selectedOS;

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({label: i.toString(36) + i, value: i.toString(36) + i});
    }
    this.listOfOption = children;
  }
}
