/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html'
})
export class VotingComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Voting - Pages';
  }

  votingsData = [{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text: 'Cras semper eu ipsum sed posuere. Fusce nec felis turpis. Aenean tellus nibh, porttitor ac neque a, tincidunt pharetra neque. Suspendisse imperdiet, tortor non fermentum fringilla, purus erat consequat sem, in efficitur felis enim nec sem.',
    score: 212,
    comments: 48,
    lastUpdate: '2h'
  }, {
    title: 'Sed ullamcorper efficitur convallis.',
    text: 'Vivamus id metus scelerisque, pharetra nisl ac, mattis urna.',
    score: 186,
    comments: 21,
    lastUpdate: '43m'
  }, {
    title: 'Fusce luctus eget ex vitae interdum. Nullam eleifend hendrerit turpis, quis tempus ligula facilisis vitae.',
    text: 'Proin eu auctor lorem. Donec a nulla mauris. Nunc auctor elit at tincidunt dapibus.',
    score: 152,
    comments: 66,
    lastUpdate: '4h'
  }, {
    title: 'Nam sit amet neque sit amet mi eleifend pharetra.',
    text: 'Etiam efficitur aliquet magna vitae feugiat. Cras aliquet orci a ipsum congue pretium semper vel dui. Vestibulum elementum eleifend sem, sed sollicitudin lorem lacinia ut. Donec nec metus blandit mauris mattis consectetur.',
    score: 109,
    comments: 12,
    lastUpdate: '1d'
  }, {
    title: 'Phasellus ultrices nulla nulla, id feugiat justo lobortis a.',
    text: 'In at nisl dignissim, sodales massa quis, auctor elit. Pellentesque facilisis libero vel tortor posuere commodo. Vestibulum nisl ante, laoreet in massa ut, consectetur vulputate purus.',
    score: 95,
    comments: 39,
    lastUpdate: '58m'
  }, {
    title: 'Morbi semper eget arcu quis vehicula.',
    text: 'Quisque auctor felis quis justo consequat, nec efficitur leo vulputate.',
    score: 61,
    comments: 0,
    lastUpdate: '2h'
  }, {
    title: 'Sed nisl ipsum, consequat vitae sapien eu, porta consectetur justo.',
    text: 'Proin sed lorem eget lacus molestie iaculis. Suspendisse porttitor ut elit vel consectetur. Vivamus interdum cursus odio, auctor euismod diam porta vel. Praesent consectetur, diam vel viverra facilisis, eros nunc consectetur leo, a lacinia velit ante sollicitudin sapien.',
    score: 24,
    comments: 3,
    lastUpdate: '1d'
  }];

}
