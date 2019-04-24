/* tslint:disable:max-line-length */
import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-messages-v1-item',
  templateUrl: './messages-v1-item.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss',
    '../../../vendor/styles/pages/messages.scss',
  ]
})
export class MessagesV1ItemComponent implements AfterViewInit {
  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Message item v1 - Pages';
  }

  @HostBinding('class') private hostClasses = 'd-flex flex-grow-1 align-items-stretch';

  sideboxOpen = false;

  // Mail boxes
  currentMailBox = 'inbox';
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
    subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    date: '3 days',
    content: `
    <p>Hi Mike,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <blockquote class="blockquote">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,

    sender: {
      avatar: 'assets/img/avatars/6-small.png',
      name: 'Mae Gibson',
      email: 'mgibson@mail.com'
    },

    attachments: [
      { name: 'image_1.jpg', size: '527KB', path: 'assets/img/bg/5.jpg' },
      { name: 'image_2.jpg', size: '269KB', path: 'assets/img/bg/6.jpg' },
      { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
      { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
    ]
  };

  ngAfterViewInit() {
    setTimeout(() => this.layoutService.setCollapsed(true, false));
  }

  objectKeys(o) {
    return Object.keys(o);
  }

  isImage(file) {
    return /\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  isFile(file) {
    return !/\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  fileIcon(file) {
    let icon = 'far fa-file';

    if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) { icon = 'far fa-file-archive'; }
    if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) { icon = 'far fa-file-audio'; }
    if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) { icon = 'far fa-file-video'; }
    if (/\.js$|\.es6$|\.ts$/i.test(file.name)) { icon = 'fab fa-js'; }
    if (/\.doc$|\.docx$/i.test(file.name)) { icon = 'far fa-file-word'; }
    if (/\.htm$|\.html$/i.test(file.name)) { icon = 'fab fa-html5'; }
    if (/\.pdf$/i.test(file.name)) { icon = 'far fa-file-pdf'; }
    if (/\.txt$/i.test(file.name)) { icon = 'far fa-file-alt'; }
    if (/\.css$/i.test(file.name)) { icon = 'fab fa-css3'; }

    return icon;
  }
}
