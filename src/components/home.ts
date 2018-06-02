import {Component, TemplateRef, ViewChild, OnInit, HostListener} from '@angular/core';
import {Observable} from 'rxjs';
import {menusContent, Menu} from '../contents/menu';
import {NzMessageService, NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./styles/index.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  isMobile = false;
  locationHref = document.location.href;
  breadcrumbOne: string;
  breadcrumbSecond: string;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(private message: NzMessageService, private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.mobileCheck();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        // 这里处理页面变化时的操作
        this.mobileCheck();
        console.log(document.body.clientWidth);
      });
    this.setBreadcrumbOne();
    this.createMessage('success');
    this.createNotificationMessage();
  }

  createMessage(type: string): void {
    this.message.create(type, `欢迎使用`);
  }

  createNotificationMessage(): void {
    this.notification.create('success', `欢迎使用`, '这是一个基本的angular后台管理模版', {
      nzClass: 'cus-top-80'
    });
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLElement) {
    this.setBreadcrumbOne();
  }

  public toggle(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }

  mobileCheck() {
    if (document.body.clientWidth < 992) {
      this.isMobile = true;
      this.isCollapsed = true;
    } else {
      this.isMobile = false;
      this.isCollapsed = false;
    }
  }

  setBreadcrumbOne() {
    this.locationHref = document.location.href;
    for (const m of menusContent) {
      if (this.locationHref.indexOf(m.key) <= -1) {
        continue;
      }
      if (this.locationHref.indexOf(m.key) > -1) {
        this.breadcrumbOne = m.title;
      }
      if (m.sub.length > 0) {
        this.setbreadcrumbSecond(m);
      } else {
        this.breadcrumbSecond = '';
      }
    }
  }

  setbreadcrumbSecond(event: Menu) {
    for (const s of event.sub) {
      if (this.locationHref.indexOf(s.key) > -1) {
        this.breadcrumbSecond = s.title;
      }
    }
  }

}
