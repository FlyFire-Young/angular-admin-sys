import {Component, OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './ckeditorIndex.html',
  styleUrls: ['../styles/index.css']
})

export class CkeditorIndexComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild('myckeditor') ckeditor: any;

  constructor() {
    this.mycontent = `<p>My html content11</p>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      // extraPlugins: 'divarea'
    };
  }

  onChange($event: any): void {
    console.log('onChange');

  }
}
