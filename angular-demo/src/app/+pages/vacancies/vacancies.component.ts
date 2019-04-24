/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html'
})
export class VacanciesComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Vacancies - Pages';
  }

  vacanciesData = [{
    title: 'Account Director',
    description: 'Donec dui risus, sagittis non congue vitae, auctor ornare ex. Aliquam hendrerit, odio vel dictum volutpat, nulla sapien venenatis tellus, vel aliquam enim eros vel ligula. Duis dictum, tellus et feugiat viverra, justo velit vestibulum ex, nec malesuada ex ligula consectetur mi.',
    department: 'Marketing',
    location: 'UK wide',
    employment: 'Full-time'
  }, {
    title: 'Java Developer',
    description: 'Morbi dolor ex, cursus vitae lectus in, auctor ultricies metus. Sed quis nulla lacus. Maecenas et lectus massa. Cras porta mauris nec nibh tincidunt, non porttitor elit condimentum. Etiam quis augue condimentum, luctus purus et, porttitor enim. Pellentesque quam sapien, lobortis eget dolor non, ultrices fermentum purus.',
    department: 'Backend Dev',
    location: 'New York, US',
    employment: 'Full-time'
  }, {
    title: 'Infrastructure Administrator',
    description: 'Nulla venenatis turpis vel ante accumsan cursus. Cras ultrices ornare neque eu pharetra. In dapibus sollicitudin urna sed suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel sapien sodales, pharetra nisl quis, molestie odio. Donec ullamcorper, tortor sed iaculis bibendum, ante ligula dignissim neque, eget cursus nibh arcu quis est. Pellentesque auctor aliquet arcu at placerat. Duis sodales porta eros vitae gravida. Duis malesuada consectetur tristique.',
    department: 'Service Dev',
    location: 'Tokyo, Japan',
    employment: 'Part-time'
  }, {
    title: 'Product Designer',
    description: 'Duis accumsan ultrices tortor, nec tristique tortor eleifend a. Nunc convallis tempor dignissim. Etiam maximus erat a nunc interdum, ac mattis eros consequat. Fusce urna erat, fringilla at faucibus a, porttitor eget tortor. Sed pharetra massa id molestie sagittis. Etiam hendrerit quis dolor ut viverra.',
    department: 'Design',
    employment: 'Freelance'
  }, {
    title: 'Frontend Developer',
    description: 'Quisque convallis dolor quis malesuada tempus. Fusce lacinia id ex id fringilla. Nunc sit amet tellus non quam efficitur convallis. Morbi elementum ex sed nisl mattis blandit.',
    department: 'Frontend Dev',
    location: 'New York, US',
    employment: 'Full-time'
  }];

}
