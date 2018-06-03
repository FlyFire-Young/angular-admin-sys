import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Hero} from './hero';
import {UIRouter} from '@uirouter/angular';
import {LocalStorage} from "../../contents/localStorage";

@Component({
  selector: 'app-login-cus-r',
  templateUrl: './login.html',
  styleUrls: ['../styles/index.css'],
})
export class LoginComponent implements OnInit {
  model = new Hero('', '');

  submitted = false;

  constructor(private ls: LocalStorage, private uiRouter: UIRouter) {
  }

  onSubmit() {
    this.submitted = true;
    this.ls.set('username', this.model.name);
    this.uiRouter.urlService.url('/cus/home/index');
    // this.uiRouter.locationService.url('/cus/home/index');
    // document.location.load('/cus/home/index');
  }

  newHero() {
    this.model = new Hero('', '');
  }

  ngOnInit() {
    this.ls.remove('username');
  }
}
