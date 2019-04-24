/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/search.scss'
  ]
})
export class SearchResultsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Search results - Pages';
  }

  curTab = 'pages';
  searchQuery = 'Advertisers embrace rich media format';

  searchData = {
    pages: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'http://example.com/pages/234',
      rating: 3.5,
      votes: 36,
      text: 'Etiam diam tellus, mattis eget dui ac, consequat lobortis erat. Sed convallis, justo nec congue luctus, sapien massa egestas ligula, sed bibendum mi nibh eu dolor. Nullam purus arcu, iaculis ac ligula ut, rutrum facilisis ex.',

      sublinks: [
        { title: 'Morbi maximus justo', text: 'Nam velit nulla, mollis eu malesuada at, tempus ut libero.' },
        { title: 'Quisque imperdiet', text: 'Phasellus suscipit aliquet risus, molestie ornare tellus.' },
        { title: 'Ligula ante', text: 'Fusce rhoncus lectus auctor.' },
        { title: 'Sit amet', text: 'Interdum eros eu.' },
        { title: 'Suscipit velit', text: 'Tempor dui eget finibus.' }
      ]
    }, {
      title: 'Morbi porta efficitur mauris, eu porttitor tortor rutrum viverra.',
      link: 'http://example.com/pages/456',
      rating: 4.5,
      votes: 68,
      text: 'Aliquam finibus enim sit amet tellus maximus convallis. Quisque dignissim, augue et hendrerit congue, nisl ante dignissim lectus, a condimentum felis quam eu justo.'
    }, {
      title: 'Nulla condimentum felis quis scelerisque luctus.',
      text: 'Nam et velit at odio interdum vehicula vel quis ex. Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit, nec placerat diam purus eget dui.'
    }, {
      title: 'Donec vestibulum nulla at est fermentum, quis consectetur lectus dapibus.',
      link: 'http://example.com/pages/789',
      text: 'Sed et urna egestas metus viverra convallis at ac lectus. Nam sodales, lacus ut venenatis pulvinar, felis velit posuere tortor, imperdiet dapibus justo ipsum a mi.'
    }, {
      title: 'Sed mattis quam ut tellus auctor, sit amet facilisis libero porta.'
    }, {
      title: 'In hac habitasse platea dictumst. Maecenas eu varius enim, eget faucibus massa.',
      link: 'http://example.com/pages/561'
    }, {
      title: 'Donec nec sapien id neque accumsan faucibus sed at lorem.',
      link: 'http://example.com/pages/783',
      text: 'Morbi ultricies fermentum tortor a tristique. Proin porta nibh in fermentum fermentum. Sed aliquet dui tempor orci aliquet, in egestas sapien porta. In sollicitudin dui nec nulla dapibus consequat.'
    }, {
      title: 'In sollicitudin dui nec nulla dapibus consequat.',
      link: 'http://example.com/pages/1246',
      text: 'Phasellus vehicula nibh at nunc sagittis, a gravida purus tincidunt. Nulla tempus augue odio, nec mollis nunc vehicula eget.'
    }, {
      title: 'Donec gravida erat quis odio convallis imperdiet.',
      link: 'http://example.com/pages/444',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam laoreet turpis sed leo gravida interdum. Aliquam efficitur tempor enim ac pretium. Integer scelerisque dui sed ex laoreet congue.'
    }],
    people: [{
      avatar: '1-small.png',
      name: 'Mike Greene',
      username: 'mgreene',
      following: false
    }, {
      avatar: '2-small.png',
      name: 'Leon Wilson',
      username: 'lwilson',
      following: true
    }, {
      avatar: '3-small.png',
      name: 'Allie Rodriguez',
      username: 'arodriguez',
      following: false
    }, {
      avatar: '4-small.png',
      name: 'Kenneth Frazier',
      username: 'kfrazier',
      following: false
    }, {
      avatar: '5-small.png',
      name: 'Nellie Maxwell',
      username: 'nmaxwell',
      following: false
    }, {
      avatar: '6-small.png',
      name: 'Mae Gibson',
      username: 'mgibson',
      following: true
    }, {
      avatar: '7-small.png',
      name: 'Alice Hampton',
      username: 'ahampton',
      following: false
    }, {
      avatar: '8-small.png',
      name: 'Hallie Lewis',
      username: 'hlewis',
      following: false
    }, {
      avatar: '9-small.png',
      name: 'Amanda Warner',
      username: 'awarner',
      following: false
    }, {
      avatar: '10-small.png',
      name: 'Wayne Morgan',
      username: 'wmorgan',
      following: true
    }, {
      avatar: '11-small.png',
      name: 'Belle Ross',
      username: 'bross',
      following: false
    }, {
      avatar: '12-small.png',
      name: 'Arthur Duncan',
      username: 'aduncan',
      following: false
    }],
    images: [{
      path: 'assets/img/bg/1.jpg',
      title: 'Lorem ipsum dolor sit amet'
    }, {
      path: 'assets/img/bg/2.jpg',
      title: 'Proin finibus commodo vestibulum'
    }, {
      path: 'assets/img/bg/3.jpg',
      title: 'Proin bibendum id ante et commodo'
    }, {
      path: 'assets/img/bg/4.jpg',
      title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis'
    }, {
      path: 'assets/img/bg/5.jpg',
      title: 'Lorem ipsum dolor sit amet'
    }, {
      path: 'assets/img/bg/6.jpg',
      title: 'Fusce rhoncus lectus auctor'
    }, {
      path: 'assets/img/bg/7.jpg',
      title: 'Pellentesque ullamcorper tempor dui eget finibus'
    }, {
      path: 'assets/img/bg/8.jpg',
      title: 'Donec vestibulum nulla at est fermentum'
    }, {
      path: 'assets/img/bg/9.jpg',
      title: 'Nulla condimentum felis quis scelerisque luctus'
    }, {
      path: 'assets/img/bg/10.jpg',
      title: 'Nam et velit at odio interdum vehicula vel quis ex'
    }, {
      path: 'assets/img/bg/11.jpg',
      title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit'
    }, {
      path: 'assets/img/bg/12.jpg',
      title: 'In hac habitasse platea dictumst'
    }],
    videos: [{
      preview: 'assets/img/bg/1.jpg',
      title: 'Lorem ipsum dolor sit amet',
      duration: '12:34',
      views: 1234,
      likes: 256,
      reposts: 32
    }, {
      preview: 'assets/img/bg/2.jpg',
      title: 'Proin finibus commodo vestibulum',
      duration: '12:34',
      views: 1235,
      likes: 257,
      reposts: 33
    }, {
      preview: 'assets/img/bg/3.jpg',
      title: 'Proin bibendum id ante et commodo',
      duration: '12:35',
      views: 1236,
      likes: 258,
      reposts: 34
    }, {
      preview: 'assets/img/bg/4.jpg',
      title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis',
      duration: '12:36',
      views: 1237,
      likes: 259,
      reposts: 35
    }, {
      preview: 'assets/img/bg/5.jpg',
      title: 'Lorem ipsum dolor sit amet',
      duration: '12:37',
      views: 1238,
      likes: 260,
      reposts: 36
    }, {
      preview: 'assets/img/bg/6.jpg',
      title: 'Fusce rhoncus lectus auctor',
      duration: '12:38',
      views: 1239,
      likes: 261,
      reposts: 37
    }, {
      preview: 'assets/img/bg/7.jpg',
      title: 'Pellentesque ullamcorper tempor dui eget finibus',
      duration: '12:39',
      views: 1240,
      likes: 262,
      reposts: 38
    }, {
      preview: 'assets/img/bg/8.jpg',
      title: 'Donec vestibulum nulla at est fermentum',
      duration: '12:40',
      views: 1241,
      likes: 263,
      reposts: 39
    }, {
      preview: 'assets/img/bg/9.jpg',
      title: 'Nulla condimentum felis quis scelerisque luctus',
      duration: '12:41',
      views: 1242,
      likes: 264,
      reposts: 40
    }, {
      preview: 'assets/img/bg/10.jpg',
      title: 'Nam et velit at odio interdum vehicula vel quis ex',
      duration: '12:42',
      views: 1243,
      likes: 265,
      reposts: 41
    }, {
      preview: 'assets/img/bg/11.jpg',
      title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit',
      duration: '12:43',
      views: 1244,
      likes: 266,
      reposts: 42
    }, {
      preview: 'assets/img/bg/12.jpg',
      title: 'In hac habitasse platea dictumst',
      duration: '12:44',
      views: 1245,
      likes: 267,
      reposts: 43
    }]
  };

  uiStarClass(i, rating) {
    if (rating > (i - 1) && rating < i) { return 'half-filled'; }
    if (rating >= i) { return 'filled'; }
    return '';
  }

}
