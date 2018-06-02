import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  templateUrl: './basicModal.html',
  styleUrls: ['../styles/index.css'],
})
export class BasicModalComponent implements OnInit {
  isVisible = false;

  constructor(private modalService: NzModalService) {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  info(): void {
    this.modalService.info({
      nzTitle: 'This is a notification message',
      nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modalService.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modalService.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modalService.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }

  ngOnInit(): void {
  }
}
