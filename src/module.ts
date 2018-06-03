import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import 'zone.js';
// import 'zone.js/dist/zone.js';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppUiRoutingModule} from './router/uiRouting';
import {HTTP} from './utils/httpUtil';
import {ViserModule} from 'viser-ng';
import { QuillModule } from 'ngx-quill';
import { CKEditorModule, CKEditorComponent } from 'ng2-ckeditor';
import {BaiduMapModule} from 'angular2-baidu-map';
import {HomeComponent} from './components/home';
import {LocalStorage} from './contents/localStorage';
// 组建管理
import {importComs} from './contents/comsManager';
import { StoreModule } from '@ngrx/store';
import {reducers, metaReducers} from './ngrxStore/reducer';

import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppUiRoutingModule,
    HttpClientModule,
    ViserModule,
    QuillModule,
    CKEditorModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    BaiduMapModule.forRoot({ ak: 'IDPsrfemMGHg9HFrTqGYutv2Rm8E9qVs' }),
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    ...importComs,

  ],
  providers: [LocalStorage, HTTP, {provide: NZ_I18N, useValue: en_US}],
  bootstrap: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
