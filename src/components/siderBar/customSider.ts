import {Component, Input, OnInit, Output, EventEmitter, Inject, DoCheck, OnChanges, HostListener} from '@angular/core';
import {menusContent, Menu} from '../../contents/menu';

@Component({
  selector: 'app-custom-sider',
  templateUrl: './customSider.html',
  styleUrls: ['../styles/index.css']
})

export class CustomSiderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  menusCus = menusContent;
  locationHref = document.location.href;

  ngOnInit() {
    this.initSetMenuOpen();
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLElement) {
    this.locationHref = document.location.href;
    this.setMenuOpen();
  }

  setMenuOpen() {
    for (const m of this.menusCus) {
      if (m.sub.length <= 0 && this.locationHref.indexOf(m.key) > -1) {
        m.checkOpen = true;
      }
      if (m.sub.length <= 0 && this.locationHref.indexOf(m.key) <= -1) {
        m.checkOpen = false;
      }
      if (m.sub.length > 0) {
        this.setSubMenuSelect(m);
      }
    }
  }

  setSubMenuSelect(event: Menu) {
    for (const s of event.sub) {
      if (this.locationHref.indexOf(s.key) > -1) {
        s.checkOpen = true;
      } else {
        s.checkOpen = false;
      }
    }
  }

  initSetMenuOpen() {
    for (const m of this.menusCus) {
      if (this.locationHref.indexOf(m.key) > -1) {
        m.checkOpen = true;
      }
      if (m.sub.length > 0) {
        this.initSetSubMenuSelect(m);
      }
    }
  }

  initSetSubMenuSelect(event: Menu) {
    for (const s of event.sub) {
      if (this.locationHref.indexOf(s.key) > -1) {
        s.checkOpen = true;
      }
    }
  }

}
