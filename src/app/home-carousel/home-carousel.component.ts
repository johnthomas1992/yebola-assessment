import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  constructor() { }
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 2, 3].map((n) => `../../assets/images/carousel${n}.png`);
  ngOnInit(): void {
    
  }

}
