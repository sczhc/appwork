/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styles: [`
    :host /deep/ .progress { border-radius: 0 !important; }
  `]
})
export class TeamsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Teams - Pages';
    this.isRTL = appService.isRTL;
  }

  statuses = {
    1: { title: 'Available', color: 'success' },
    2: { title: 'Busy', color: 'danger' }
  };

  teamsData = [{
    status: 2,
    title: 'Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',

    leaders: [
      { avatar: '2-small.png' }
    ],

    members: [
      { avatar: '3-small.png' },
      { avatar: '4-small.png' },
      { avatar: '5-small.png' },
      { avatar: '6-small.png' }
    ],

    curProject: {
      title: 'Frontend Development',
      tasks: 15,
      completedTasks: 5,
      created: '02/01/2018',
      deadline: '03/12/2018'
    }
  }, {
    status: 2,
    title: 'Backend',
    description: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',

    leaders: [
      { avatar: '7-small.png' },
      { avatar: '8-small.png' }
    ],

    members: [
      { avatar: '9-small.png' },
      { avatar: '10-small.png' },
      { avatar: '11-small.png' },
      { avatar: '12-small.png' },
      { avatar: '1-small.png' },
      { avatar: '2-small.png' },
      { avatar: '3-small.png' },
      { avatar: '4-small.png' }
    ],

    curProject: {
      title: 'Website',
      tasks: 44,
      completedTasks: 29,
      created: '02/01/2018',
      deadline: '03/12/2018'
    }
  }, {
    status: 1,
    title: 'Design',
    description: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',

    leaders: [
      { avatar: '5-small.png' }
    ],

    members: [
      { avatar: '6-small.png' },
      { avatar: '7-small.png' },
      { avatar: '8-small.png' },
      { avatar: '9-small.png' }
    ],

    curProject: null
  }, {
    status: 2,
    title: 'Marketing',
    description: 'Suspendisse scelerisque nisi ac semper ornare.',

    leaders: [
      { avatar: '7-small.png' }
    ],

    members: [
      { avatar: '8-small.png' },
      { avatar: '9-small.png' },
      { avatar: '10-small.png' }
    ],

    curProject: {
      title: 'example.com SEO',
      tasks: 70,
      completedTasks: 45,
      created: '02/01/2018',
      deadline: '03/12/2018'
    }
  }, {
    status: 1,
    title: 'Graphic',
    description: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',

    leaders: [
      { avatar: '11-small.png' }
    ],

    members: [
      { avatar: '12-small.png' },
      { avatar: '1-small.png' },
      { avatar: '2-small.png' },
      { avatar: '3-small.png' }
    ],

    curProject: null
  }];

  completedPercent(tasks, completed) {
    return Math.round((completed / tasks) * 100);
  }

}
