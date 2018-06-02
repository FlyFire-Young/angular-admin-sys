import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './checkboxes.html',
  styleUrls: ['../styles/index.css'],
})
export class CheckboxesComponent implements OnInit {
  checked = true;

  isCheckedButton = true;
  isDisabledButton = false;
  checkOptionsOne = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsTwo = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear', checked: true},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsThree = [
    {label: 'Apple', value: 'Apple', disabled: true, checked: true},
    {label: 'Pear', value: 'Pear', disabled: true},
    {label: 'Orange', value: 'Orange'}
  ];

  allChecked = false;
  indeterminate = true;
  checkOptionsOneCus = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear', checked: false},
    {label: 'Orange', value: 'Orange', checked: false}
  ];

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOneCus.forEach(item => item.checked = true);
    } else {
      this.checkOptionsOneCus.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOneCus.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOneCus.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  ngOnInit() {

  }

  log(value: object[]): void {
    console.log(value);
  }

  checkButton(): void {
    this.isCheckedButton = !this.isCheckedButton;
  }

  disableButton(): void {
    this.isDisabledButton = !this.isDisabledButton;
  }


}
