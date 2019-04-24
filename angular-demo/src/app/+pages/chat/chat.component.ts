/* tslint:disable:max-line-length */
import { Component, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss',
    '../../../vendor/styles/pages/chat.scss'
  ]
})
export class ChatComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Chat - Pages';
  }

  @HostBinding('class') private hostClasses = 'd-flex flex-grow-1 align-items-stretch';

  sideboxOpen = false;

  user = {
    avatar: '1-small.png'
  };

  contactsData = [
    { avatar: '12-small.png', name: 'Arthur Duncan', username: 'aduncan', online: false, newMessages: 0 },
    { avatar: '5-small.png', name: 'Nellie Maxwell', username: 'nmaxwell', online: true, newMessages: 2 },
    { avatar: '9-small.png', name: 'Amanda Warner', username: 'awarner', online: false, newMessages: 0 },
    { avatar: '6-small.png', name: 'Mae Gibson', username: 'mgibson', online: true, newMessages: 0 },
    { avatar: '2-small.png', name: 'Leon Wilson', username: 'lwilson', online: true, newMessages: 5 },
    { avatar: '7-small.png', name: 'Alice Hampton', username: 'ahampton', online: false, newMessages: 0 },
    { avatar: '8-small.png', name: 'Hallie Lewis', username: 'hlewis', online: false, newMessages: 1 },
    { avatar: '4-small.png', name: 'Kenneth Frazier', username: 'kfrazier', online: true, newMessages: 0 },
    { avatar: '10-small.png', name: 'Wayne Morgan', username: 'wmorgan', online: false, newMessages: 0 },
    { avatar: '3-small.png', name: 'Allie Rodriguez', username: 'arodriguez', online: true, newMessages: 0 },
    { avatar: '11-small.png', name: 'Belle Ross', username: 'bross', online: false, newMessages: 0 }
  ];

  chatData = {
    user: 'kfrazier',
    status: 'Typing...',
    messages: [
      { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:33 am' },
      { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:34 am' },
      { you: true, text: 'Cum ea graeci tractatos.', date: '2:35 am' },
      { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:36 am' },
      { you: false, text: 'Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.', date: '2:37 am' },
      { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:38 am' },
      { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:39 am' },
      { you: true, text: 'Cum ea graeci tractatos.', date: '2:40 am' },
      { you: true, text: 'Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.', date: '2:41 am' },
      { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:42 am' },
      { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:43 am' },
      { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:44 am' }
    ]
  };

  get chatUser() {
    for (let i = 0, l = this.contactsData.length; i < l; i++) {
      if (this.contactsData[i]['username'] === this.chatData['user']) { return this.contactsData[i]; }
    }
  }

  get chatContacts() {
    //
    // Sort contacts (online then offline)
    //
    return [].concat(
      // Online
      this.contactsData.reduce((c, i) => {
        if (i['online']) { c['push'](i); }
        return c;
      }, [])['sort'](function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
      })
    ).concat(
      // Offline
      this.contactsData.reduce((c, i) => {
        if (!i['online']) { c['push'](i); }
        return c;
      }, [])['sort'](function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
      })
    );
  }

}
