import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/tasks.scss'
  ]
})
export class TaskListComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Task list - Pages';
    this.isRTL = appService.isRTL;
  }

  curView = 'inbox';

  // "Projects" and "tags" tabs
  curTab = 'projects';

  // Projects
  projects = [
    { name: 'Website design' },
    { name: 'SEO improvement' },
    { name: 'example.com redesign' }
  ];

  // Tags
  tags = {
    clients: { title: 'Clients', color: 'success' },
    important: { title: 'Important', color: 'danger' },
    social: { title: 'Social', color: 'info' },
    other: { title: 'Other', color: 'warning' }
  };

  sectionsData = [{
    title: 'Today',
    tasks: [
      { text: 'Buy products', tags: ['other'], left: '58 mins', completed: false },
      { text: 'Reply to emails', completed: false },
      { text: 'Write blog post', left: '20 hours', completed: false },
      { text: 'Wash my car', completed: true }
    ]
  }, {
    title: 'Tomorrow',
    tasks: [
      { text: 'Buy antivirus', tags: ['other'], completed: false },
      { text: 'Jane\'s Happy Birthday', completed: false },
      { text: 'Call mom', completed: false }
    ]
  }, {
    title: 'Next week',
    tasks: [
      { text: 'New blog layout', tags: ['clients'], completed: false },
      { text: 'Create UI design model', completed: false },
      { text: 'New icons set for an iOS app', completed: false },
      { text: 'Create ad campaign banners set', completed: false },
      { text: 'Edit the draft for the icons', completed: false },
      { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
      { text: 'Support tickets list doesn\'t support commas', completed: false },
      { text: 'Help Web devs with HTML integration', completed: false }
    ]
  }];

  sortablejsOptions: Object = {
    animation: 150,
    handle: '.task-list-handle',
    group: {
      name: 'task-list',
      put: true,
      pull: true
    }
  };

  objectKeys(o) {
    return Object.keys(o);
  }

}
