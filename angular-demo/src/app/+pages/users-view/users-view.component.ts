/// <reference types="numeral" />

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['../../../vendor/styles/pages/users.scss']
})
export class UsersViewComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'View user - Pages';
    this.isRTL = appService.isRTL;
  }

  userData = {
    avatar: '5-small.png',
    name: 'Nelle Maxwell',
    username: 'nmaxwell',
    email: 'nmaxwell@mail.com',
    company: 'Company Ltd.',
    id: 3425433,
    registered: '01/23/2017',
    latestActivity: '01/23/2018',
    verified: true,
    role: 1,
    status: 1,

    permissions: [
      { module: 'Users', read: true, write: false, create: false, delete: false },
      { module: 'Articles', read: true, write: true, create: true, delete: false },
      { module: 'Staff', read: false, write: false, create: false, delete: false }
    ],

    // Statistics
    posts: 25,
    followers: 534,
    following: 236,

    info: {
      birthday: 'May 3, 1995',
      country: 'Canada',
      languages: ['English'],
      phone: '+0 (123) 456 7891',
      website: '',
      music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
      movies: [
        'The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E',
        'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'
      ],

      twitter: 'https://twitter.com/user',
      facebook: 'https://www.facebook.com/user',
      google: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/user'
    }
  };

  formatInt (v) {
    return numeral(v).format('0,0');
  }
}
