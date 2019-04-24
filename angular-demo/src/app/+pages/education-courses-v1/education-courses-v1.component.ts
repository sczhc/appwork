/// <reference types="numeral" />

/* tslint:disable:max-line-length */

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-education-courses-v1',
  templateUrl: './education-courses-v1.component.html'
})
export class EducationCoursesV1Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Courses v1 - Pages';
  }

  coursesData = [{
    image: '1.jpg',
    title: 'Complete Java Masterclass',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',
    price: 15.99,
    duration: '12h',
    rating: 4.5,
    votes: 55,
    tags: ['Java']
  }, {
    image: '2.jpg',
    title: 'The Complete Web Developer Course 2.0',
    description: 'Pellentesque at sodales tortor, eu volutpat metus.',
    price: 44.00,
    duration: '34h',
    rating: 3.5,
    votes: 55,
    tags: ['Backend']
  }, {
    image: '3.jpg',
    title: 'Python for Beginners: Learn Python Programming',
    description: 'Nulla lorem, placerat in ultricies sed, aliquet eu eros. In lacinia porttitor enim vel commodo.',
    price: 56.99,
    duration: '44h',
    rating: 4.5,
    votes: 55,
    tags: ['Backend', 'Python']
  }, {
    image: '4.jpg',
    title: 'Become a Web Developer from Scratch',
    description: 'Donec gravida id neque nec faucibus. Nam congue leo quis ligula dignissim, id scelerisque ipsum condimentum.',
    price: 0,
    duration: '16h',
    rating: 3.5,
    votes: 55,
    tags: ['HTML5', 'CSS3', 'JS']
  }, {
    image: '5.jpg',
    title: 'Become a Certified Web Developer',
    description: 'Vestibulum eget magna eget turpis imperdiet finibus. Maecenas mi velit, varius vel sapien sed, sodales dignissim risus.',
    price: 14.99,
    duration: '17h',
    rating: 4.5,
    votes: 55,
    tags: ['HTML5', 'CSS3', 'JS']
  }, {
    image: '6.jpg',
    title: 'Full stack Universal React with Redux, Node js and MongoDB',
    description: 'Integer fringilla varius vestibulum. Quisque efficitur tempor nisl vitae rutrum. Vestibulum et iaculis arcu, vitae placerat lacus.',
    price: 66.99,
    duration: '25h',
    rating: 5,
    votes: 55,
    tags: ['React', 'Redux', 'MongoDB', 'NodeJS']
  }];

  uiStarClass(i, rating) {
    if (rating > (i - 1) && rating < i) { return 'half-filled'; }
    if (rating >= i) { return 'filled'; }
    return '';
  }

  formatPrice(p) {
    return numeral(p).format('$0,0.00');
  }
}
