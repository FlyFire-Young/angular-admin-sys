import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-service-d',
  templateUrl: './basicCusServerModal.html',
  styleUrls: ['../styles/index.css'],
})
export class BasicCusServerModalComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor(private modal: NzModalRef) {
  }

  destroyModal(): void {
    this.modal.destroy({data: 'this the result data'});
  }

  ngOnInit(): void {
  }
}
