import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// const platform = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
