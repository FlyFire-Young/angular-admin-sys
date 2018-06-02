import {PACKAGE_ROOT_URL} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

class MyUrlResolver extends UrlResolver {
  resolve(baseUrl: string, url: string): string {

    const resolvedUrl = url;
    console.log(baseUrl);
    console.log(url);
    // if (url.substr(0, 6) == 'mytemplate') {
    //   resolvedUrl = resolvedUrl.replace('mytemplate:', '/template/gz/');
    // } else {
    //   resolvedUrl = super.resolve(baseUrl, url);
    // }
    return resolvedUrl;
  }
}
