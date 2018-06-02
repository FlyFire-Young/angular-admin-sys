import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {BasicCusServerModalComponent} from './basicCusServerModal';

@Component({
  selector: 'app-modal-service-cus',
  templateUrl: './basicServerModal.html',
  styleUrls: ['../styles/index.css'],
})
export class BasicServerModalComponent implements OnInit {
  tplModal: NzModalRef;
  tplModalButtonLoading = false;
  htmlModalVisible = false;

  constructor(private modalService: NzModalService) {
  }

  createModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  createComponentModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: BasicCusServerModalComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter: [{
        label: 'change component tilte from outside',
        onClick: (componentInstance) => {
          componentInstance.title = 'title in inner component is changed';
        }
      }]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    window.setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  createCustomButtonModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'custom button demo',
      nzContent: 'pass array of button config to nzFooter to create multiple buttons',
      nzFooter: [
        {
          label: 'Close',
          shape: 'default',
          onClick: () => modal.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () => this.modalService.confirm({nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content'})
        },
        {
          label: 'Change Button Status',
          type: 'danger',
          loading: false,
          onClick(): void {
            this.loading = true;
            window.setTimeout(() => this.loading = false, 1000);
            window.setTimeout(() => {
              this.loading = false;
              this.disabled = true;
              this.label = 'can not be clicked！';
            }, 2000);
          }
        },
        {
          label: 'async load',
          type: 'dashed',
          onClick: () => new Promise(resolve => window.setTimeout(resolve, 2000))
        }
      ]
    });
  }

  openAndCloseAll(): void {
    let pos = 0;

    ['create', 'info', 'success', 'error'].forEach((method) => this.modalService[method]({
      nzMask: false,
      nzTitle: `Test ${method} title`,
      nzContent: `Test content: <b>${method}</b>`,
      nzStyle: {position: 'absolute', top: `${pos * 70}px`, left: `${(pos++) * 300}px`}
    }));

    this.htmlModalVisible = true;

    this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

    window.setTimeout(() => this.modalService.closeAll(), 2000);
  }

  ngOnInit(): void {
  }
}
