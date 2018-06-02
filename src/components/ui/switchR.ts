import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './switchR.html',
  styleUrls: ['../styles/index.css'],
})
export class SwitchRComponent implements OnInit {
  switchValueOne = false;
  switchValueTwo = false;
  isDisabled = true;

  ngOnInit() {

  }
}
