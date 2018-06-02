import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './popover.html',
  styleUrls: ['../styles/index.css'],
})
export class PopoverComponent implements OnInit {
  title: string;
  content: any;
  visible: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  clickMe() {
    this.visible = false;
  }
}
