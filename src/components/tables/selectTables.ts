import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './selectTables.html',
  styleUrls: ['../styles/index.css'],
})
export class SelectTablesComponent implements OnInit {
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'John Brown',
      age     : 32,
      address : 'New York No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Jim Green',
      age     : 42,
      address : 'London No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Joe Black',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Disabled User',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: true
    }
  ];

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }
  ngOnInit(): void {

  }
}
