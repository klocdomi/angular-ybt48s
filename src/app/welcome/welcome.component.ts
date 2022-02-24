import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }

  prevImg(): void {
    var myCarousel = document.querySelectorAll('.carousel-item');
    for (let i = 0; i < myCarousel.length; i++) {
      if (i !== 0 && myCarousel[i].classList.contains('active')) {
        myCarousel[i].classList.remove('active');
        myCarousel[i - 1].classList.add('active');
        console.log(`active image #${i}`);
        break;
      }

    }
    console.log('prev disabled!');
  }

  nextImg(): void {
    var myCarousel = document.querySelectorAll('.carousel-item');
    for (let i = 0; i < myCarousel.length; i++) {
      if (
        i !== myCarousel.length -1 &&
        myCarousel[i].classList.contains('active')
      ) {
        myCarousel[i].classList.remove('active');
        myCarousel[i + 1].classList.add('active');
        console.log(`active image #${i}`);
        break;
      }
    }
    console.log('next disabled!');
  }
}
