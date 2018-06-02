import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';

import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';

@Component({
  templateUrl: './quillIndex.html',
  styleUrls: ['../styles/index.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuillIndexComponent implements OnInit {
  @ViewChild('editor') editor: QuillEditorComponent;

  constructor() {
  }

  ngOnInit() {

  }

  setFocus($event) {
    $event.focus();
  }
}

