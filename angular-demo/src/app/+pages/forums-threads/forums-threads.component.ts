import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-forums-threads',
  templateUrl: './forums-threads.component.html'
})
export class ForumsThreadsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Forum threads - Pages';
  }

  // Tags
  tags = {
    solved: { title: 'Solved', color: 'success' },
    locked: { title: 'Locked', color: 'default' },
    closed: { title: 'Closed', color: 'secondary' },
    sticky: { title: 'Sticky', color: 'warning' },
    hot: { title: 'Hot!', color: 'danger' }
  };

  threadsData = [{
    title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus',
    startedAt: '25 days',
    startedBy: 'Leon Wilson',
    replies: 12,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '2-small.png', name: 'Leon Wilson' }
    }
  }, {
    title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at',
    tags: ['solved'],
    startedAt: '25 days',
    startedBy: 'Allie Rodriguez',
    replies: 43,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
    }
  }, {
    title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis',
    tags: ['locked'],
    startedAt: '25 days',
    startedBy: 'Kenneth Frazier',
    replies: 42,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '4-small.png', name: 'Kenneth Frazier' }
    }
  }, {
    title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi',
    startedAt: '25 days',
    startedBy: 'Nellie Maxwell',
    replies: 632,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '5-small.png', name: 'Nellie Maxwell' }
    }
  }, {
    title: 'Pellentesque in consequat erat',
    tags: ['closed'],
    startedAt: '25 days',
    startedBy: 'Mae Gibson',
    replies: 53,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '6-small.png', name: 'Mae Gibson' }
    }
  }, {
    title: 'Vivamus maximus lectus sed finibus pellentesque',
    startedAt: '25 days',
    startedBy: 'Alice Hampton',
    replies: 33,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '7-small.png', name: 'Alice Hampton' }
    }
  }, {
    title: 'Nullam luctus eget odio in bibendum',
    startedAt: '25 days',
    startedBy: 'Hallie Lewis',
    replies: 58,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '8-small.png', name: 'Hallie Lewis' }
    }
  }, {
    title: 'Donec rutrum metus mi, eget consequat metus posuere non',
    tags: ['solved'],
    startedAt: '25 days',
    startedBy: 'Amanda Warner',
    replies: 134,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '9-small.png', name: 'Amanda Warner' }
    }
  }, {
    title: 'Integer eu tortor purus',
    startedAt: '25 days',
    startedBy: 'Wayne Morgan',
    replies: 32,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '12-small.png', name: 'Wayne Morgan' }
    }
  }, {
    title: 'Nullam luctus eget odio in bibendum',
    tags: ['hot'],
    startedAt: '25 days',
    startedBy: 'Belle Ross',
    replies: 12,
    lastUpdate: {
      date: '1 day',
      user: { avatar: '11-small.png', name: 'Belle Ross' }
    }
  }];
}
