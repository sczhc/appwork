import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: [
    '../../../vendor/libs/ng-select/ng-select.scss',
    '../../../vendor/styles/pages/users.scss',
    './users-edit.component.scss'
  ]
})
export class UsersEditComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Edit user - Pages';
    this.isRTL = appService.isRTL;
  }

  languages = [
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'French', label: 'French' }
  ];

  userData = {
    avatar: '5-small.png',
    name: 'Nelle Maxwell',
    username: 'nmaxwell',
    email: 'nmaxwell@mail.com',
    company: 'Company Ltd.',
    id: 3425433,
    verified: true,
    role: 1,
    status: 1,

    permissions: [
      { module: 'Users', read: true, write: false, create: false, delete: false },
      { module: 'Articles', read: true, write: true, create: true, delete: false },
      { module: 'Staff', read: false, write: false, create: false, delete: false }
    ],

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
}
