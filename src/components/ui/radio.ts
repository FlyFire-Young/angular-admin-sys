import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './radio.html',
  styleUrls: ['../styles/index.css'],
})
export class RadioComponent implements OnInit {
  disabled = true;
  radioValue = 'A';
  radioValueY = 'A';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  ngOnInit() {

  }
}
