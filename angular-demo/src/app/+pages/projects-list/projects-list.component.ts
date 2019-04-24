/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [`
    :host /deep/ .progress { border-radius: 0 !important; }
  `]
})
export class ProjectsListComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Project list - Pages';
    this.isRTL = appService.isRTL;
  }

  statuses = {
    1: { title: 'Active', color: 'success' },
    2: { title: 'Pending', color: 'warning' }
  };

  projectsData = [{
    status: 1,
    title: 'Frontend Development',
    tasks: 15,
    completedTasks: 5,
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',
    created: '02/01/2018',
    deadline: '03/12/2018',
    team: [
      { avatar: '2-small.png' },
      { avatar: '3-small.png' },
      { avatar: '4-small.png' },
      { avatar: '5-small.png' },
      { avatar: '6-small.png' }
    ]
  }, {
    status: 1,
    title: 'Website',
    tasks: 44,
    completedTasks: 29,
    shortDescription: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',
    created: '02/01/2018',
    deadline: '03/12/2018',
    team: [
      { avatar: '7-small.png' },
      { avatar: '8-small.png' },
      { avatar: '9-small.png' }
    ]
  }, {
    status: 1,
    title: 'UI update',
    tasks: 54,
    completedTasks: 48,
    shortDescription: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',
    created: '02/01/2018',
    deadline: '03/12/2018',
    team: [
      { avatar: '10-small.png' },
      { avatar: '11-small.png' },
      { avatar: '12-small.png' }
    ]
  }, {
    status: 2,
    title: 'SEO',
    tasks: 70,
    completedTasks: 45,
    shortDescription: 'Suspendisse scelerisque nisi ac semper ornare.',
    created: '02/01/2018',
    deadline: '03/12/2018',
    team: [
      { avatar: '2-small.png' },
      { avatar: '3-small.png' },
      { avatar: '4-small.png' }
    ]
  }, {
    status: 1,
    title: 'example.com design',
    tasks: 84,
    completedTasks: 28,
    shortDescription: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',
    created: '02/01/2018',
    deadline: '03/12/2018',
    team: [
      { avatar: '5-small.png' },
      { avatar: '6-small.png' },
      { avatar: '7-small.png' },
      { avatar: '8-small.png' }
    ]
  }];

  completedPercent(tasks, completed) {
    return Math.round((completed / tasks) * 100);
  }
}
