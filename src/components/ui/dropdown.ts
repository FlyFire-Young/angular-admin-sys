import {Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';

@Component({
  templateUrl: './dropdown.html',
  styleUrls: ['../styles/index.css'],
})
export class DropdownComponent implements OnInit {
  private dropdown: NzDropdownContextComponent;

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

  constructor(private nzDropdownService: NzDropdownService) {

  }

  ngOnInit() {

  }

  log(data: string): void {
    console.log(data);
  }

  logEvent(e) {
    console.log('click dropdown button');
  }
}
