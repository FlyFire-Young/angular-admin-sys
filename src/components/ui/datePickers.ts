import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './datePickers.html',
  styleUrls: ['../styles/index.css'],
})
export class DatePickersComponent implements OnInit {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  ngOnInit() {

  }
}
