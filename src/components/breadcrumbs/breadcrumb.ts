import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-breadcrumb',
  templateUrl: './breadcrumb.html',
  styleUrls: ['../styles/index.css']
})

export class BreadcrumbComponent {
  @Input() breadcrumbOne: string;
  @Input() breadcrumbSecond: string;

}
