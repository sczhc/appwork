import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html'
})
export class ForumsListComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Forum list - Pages';
  }

  sectionsData = [{
    title: 'General',
    forums: [{
      title: 'Getting started',
      threads: 12,
      replies: 34,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus' },
        user: { avatar: '2-small.png', name: 'Leon Wilson' }
      }
    }, {
      title: 'Announcements',
      threads: 43,
      replies: 112,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at' },
        user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
      }
    }, {
      title: 'Guides',
      threads: 42,
      replies: 654,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis' },
        user: { avatar: '4-small.png', name: 'Kenneth Frazier' }
      }
    }]
  }, {
    title: 'Purchasing',
    forums: [{
      title: 'Payments',
      threads: 632,
      replies: 4234,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi' },
        user: { avatar: '5-small.png', name: 'Nellie Maxwell' }
      }
    }, {
      title: 'Shipping',
      threads: 53,
      replies: 116,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Pellentesque in consequat erat' },
        user: { avatar: '6-small.png', name: 'Mae Gibson' }
      }
    }, {
      title: 'Products',
      threads: 33,
      replies: 86,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Vivamus maximus lectus sed finibus pellentesque' },
        user: { avatar: '7-small.png', name: 'Alice Hampton' }
      }
    }]
  }, {
    title: 'Partnership',
    forums: [{
      title: 'Requirements',
      threads: 58,
      replies: 176,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Nullam luctus eget odio in bibendum' },
        user: { avatar: '8-small.png', name: 'Hallie Lewis' }
      }
    }, {
      title: 'Conditions',
      threads: 134,
      replies: 568,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Donec rutrum metus mi, eget consequat metus posuere non' },
        user: { avatar: '9-small.png', name: 'Amanda Warner' }
      }
    }]
  }, {
    title: 'Support',
    forums: [{
      title: 'Common questions',
      threads: 32,
      replies: 578,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Integer eu tortor purus' },
        user: { avatar: '10-small.png', name: 'Wayne Morgan' }
      }
    }, {
      title: 'Site issues',
      threads: 12,
      replies: 56,
      lastUpdate: {
        date: '1d',
        thread: { title: 'Nullam luctus eget odio in bibendum' },
        user: { avatar: '11-small.png', name: 'Belle Ross' }
      }
    }]
  }];
}
