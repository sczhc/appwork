import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tickets-edit',
  templateUrl: './tickets-edit.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/tickets.scss',
    './tickets-edit.component.scss'
  ]
})
export class TicketsEditComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ticket edit - Pages';
  }

  ticketData = {
    author: {
      avatar: '11-small.png',
      name: 'Belle Ross',
      username: 'bross'
    },
    id: '34564',
    createdAt: '04/24/2017',
    lastUpdate: '01/27/2018',
    subject: 'esse velit enim elit dolor magna est laboris',
    description: 'Ticket description',
    priority: 1,
    status: 3,
    tags: ['Feature', 'High priority'],
    assignee: [
      { avatar: '9-small.png', name: 'Amanda Warner' },
      { avatar: '2-small.png', name: 'Leon Wilson' },
      { avatar: '8-small.png', name: 'Hallie Lewis' }
    ],
    attachments: [
      { path: 'assets/img/bg/5.jpg' },
      { path: 'assets/img/bg/6.jpg' },
      { path: 'assets/img/bg/7.jpg' },
      { path: 'assets/path/to/file.txt' }
    ]
  };

  isImage(file) {
    return /\.jpg$|\.png$|\.gif$/i.test(file.path);
  }

  fileExt(file) {
    const parts = file.path.split('.');
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'FILE';
  }
}
