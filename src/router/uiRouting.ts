import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {uiRouterContents} from '../contents/comsManager';

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: [...uiRouterContents],
      useHash: true,
      otherwise: '/cus/pages/login'
    })
  ],
  exports: [
    UIRouterModule
  ]
})

export class AppUiRoutingModule {
}
