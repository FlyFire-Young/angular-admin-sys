import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './customHeader.html',
  styleUrls: ['../styles/index.css']
})
export class CustomHeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Input() isMobile: boolean;
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter();
  textCus = 'admin';
  ngOnInit() {
    // console.log(this.isCollapsed);
  }

  public clickToCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleEvent.emit(this.isCollapsed);
  }

}
