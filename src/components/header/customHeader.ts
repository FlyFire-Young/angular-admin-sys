import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UIRouter} from '@uirouter/angular';
import {LocalStorage} from "../../contents/localStorage";

@Component({
  selector: 'app-custom-header',
  templateUrl: './customHeader.html',
  styleUrls: ['../styles/index.css']
})
export class CustomHeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Input() isMobile: boolean;
  @Input() realUserName: any;
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    // console.log(this.isCollapsed);
  }
  constructor(private ls: LocalStorage, private uiRouter: UIRouter) {
  }


  public clickToCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleEvent.emit(this.isCollapsed);
  }

  layout() {
    this.ls.remove('username');
    this.uiRouter.urlService.url('/cus/pages/login');
  }

}
