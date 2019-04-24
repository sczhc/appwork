import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html'
})
export class KanbanBoardComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Kanban board - Pages';
    this.isRTL = appService.isRTL;
  }

  tags = {
    clients: { title: 'Clients', color: 'success' },
    important: { title: 'Important', color: 'danger' },
    social: { title: 'Social', color: 'info' },
    other: { title: 'Other', color: 'warning' }
  };

  newTasks = [
    { text: 'New blog layout' },
    { text: 'Create UI design model', tags: ['clients'] },
    { text: 'Another icon set' },
    { text: 'iOS application design mockups' }
  ];

  inProgressTasks = [
    { text: 'New icons set for an iOS app', tags: ['other'] },
    { text: 'Create ad campaign banners set' }
  ];

  testTasks = [
    { text: 'Help Web devs with HTML integration' },
    { text: 'UI/UX design review', tags: ['important'] },
    { text: 'Marketing campaign review' },
    { text: 'Fix website issues on mobile' },
    { text: 'Create landing page for a new app', tags: ['social'] }
  ];

  doneTasks = [
    { text: 'Edit the draft for the icons', tags: ['important'] },
    { text: 'Edit the draft for the icons' },
    { text: 'Edit the draft for the icons' }
  ];

  sortablejsOptions = {
    animation: 150,
    group: {
      name: 'kanban-board',
      put: true,
      pull: true
    }
  };
}
