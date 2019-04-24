import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: [
    '../../../vendor/libs/quill/typography.scss',
    '../../../vendor/libs/quill/editor.scss',
    './articles-edit.component.scss'
  ]
})
export class ArticlesEditComponent {
  isIE10: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Edit article - Pages';
    this.isIE10 = this.appService.isIE10;
  }

  articleData = {
    id: 563,
    createdAt: '03/30/2018',
    title: 'What Is The Big R For Marketing Your Business',
    slug: 'what-is-the-big-r-for-marketing-your-business',
    tags: ['Productivity', 'Creativity', 'Writing', 'Inspiration', 'Psychology'],
    status: 1,
    content: 'Article content',
    mainImage: '13.jpg',

    author: {
      avatar: '1-small.png',
      username: 'mgreene',
      name: 'Mike Greene'
    },

    meta: {
      title: 'What Is The Big R For Marketing Your Business',
      description: 'Read What Is The Big R For Marketing Your Business',
      keywords: 'Productivity, Creativity, Writing, Inspiration, Psychology'
    }
  };
}
