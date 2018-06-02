import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './carouselR.html',
  styleUrls: ['../styles/index.css'],
})
export class CarouselRComponent implements OnInit {
  arrayCus = [1, 2, 3, 4];
  effect = 'scrollx';
  array = [1, 2, 3];
  arrayTh = [1, 2, 3, 4];
  arrayRa = [1, 2, 3, 4];

  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 3000);
  }

}
