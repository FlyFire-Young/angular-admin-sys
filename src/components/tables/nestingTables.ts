import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './nestingTables.html',
  styleUrls: ['../styles/index.css'],
})
export class NestingTablesComponent implements OnInit {
  nestedTableData = [];
  innerTableData = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.nestedTableData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.innerTableData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
  }
}
