import { Component, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-messages-v3-compose',
  templateUrl: './messages-v3-compose.component.html',
  styleUrls: [
    '../../../vendor/libs/quill/typography.scss',
    '../../../vendor/libs/quill/editor.scss',
    '../../../vendor/styles/pages/messages.scss',
    './messages-v3-compose.component.scss'
  ]
})
export class MessagesV3ComposeComponent implements AfterViewInit {
  isIE10: boolean;

  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Compose message v3 - Pages';
    this.isIE10 = this.appService.isIE10;
  }

  // Mail boxes
  currentMailBox = null;
  mailBoxes = {
    inbox: { title: 'Inbox', icon: 'ion ion-ios-filing', count: 15 },
    sent: { title: 'Sent', icon: 'ion ion ion-ios-mail' },
    drafts: { title: 'Drafts', icon: 'ion ion ion-md-create' },
    spam: { title: 'Spam', icon: 'ion ion ion-md-folder-open' },
    trash: { title: 'Trash', icon: 'ion ion ion-md-trash' }
  };

  // Labels
  labels = {
    clients: { title: 'Clients', color: 'success' },
    important: { title: 'Important', color: 'danger' },
    social: { title: 'Social', color: 'info' },
    other: { title: 'Other', color: 'warning' }
  };

  // Message
  messageData = {
    to: '',
    subject: '',
    content: ''
  };

  ngAfterViewInit() {
    setTimeout(() => this.layoutService.setCollapsed(true, false));
  }

  objectKeys(o) {
    return Object.keys(o);
  }

}
