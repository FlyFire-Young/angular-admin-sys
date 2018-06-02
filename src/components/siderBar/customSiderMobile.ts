import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu, menusContent} from '../../contents/menu';

@Component({
  selector: 'app-custom-sider-mobile',
  templateUrl: './customSiderMobile.html',
  styleUrls: ['../styles/index.css']
})

export class CustomSiderMobileComponent implements OnInit {
  @Input() isCollapsed: boolean;
  menusCus = menusContent;
  locationHref = document.location.href;

  ngOnInit() {
    this.setMenuOpen();
  }

  setMenuOpen() {
    this.locationHref = document.location.href;
    for (const m of this.menusCus) {
      if (this.locationHref.indexOf(m.key) > -1) {
        m.checkOpen = true;
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
      }
    }
  }
}
