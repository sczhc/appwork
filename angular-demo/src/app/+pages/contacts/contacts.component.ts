import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/contacts.scss'
  ]
})
export class ContactsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Contacts - Pages';
    this.isRTL = appService.isRTL;
  }

  viewMode = 'col';

  contactsData = [
    {
      avatar: '9.png',
      name: 'Amanda Warner',
      username: 'awarner',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '5.png',
      name: 'Nelle Maxwell',
      username: 'nmaxwell',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '4.png',
      name: 'Kenneth Frazier',
      username: 'kfrazier',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '6.png',
      name: 'Mae Gibson',
      username: 'mgibson',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '12.png',
      name: 'Arthur Duncan',
      username: 'aduncan',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '11.png',
      name: 'Belle Ross',
      username: 'bross',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '3.png',
      name: 'Allie Rodriguez',
      username: 'arodriguez',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }, {
      avatar: '7.png',
      name: 'Alice Hampton',
      username: 'ahampton',
      company: 'Company Inc.',
      phone: '+0 (123) 456 7891'
    }
  ];

}
