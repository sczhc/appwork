import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { PagesFlexRoutingModule } from './pages-flex-routing.module';


// *******************************************************************************
// Libs

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from '../../vendor/libs/quill/quill.module';


// *******************************************************************************
// Page components

import { MessagesV1ListComponent } from './messages-v1-list/messages-v1-list.component';
import { MessagesV1ItemComponent } from './messages-v1-item/messages-v1-item.component';
import { MessagesV1ComposeComponent } from './messages-v1-compose/messages-v1-compose.component';
import { ChatComponent } from './chat/chat.component';
import { ClientsComponent } from './clients/clients.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    // Libs
    PerfectScrollbarModule,
    QuillModule,

    PagesFlexRoutingModule
  ],
  declarations: [
    MessagesV1ListComponent,
    MessagesV1ItemComponent,
    MessagesV1ComposeComponent,
    ChatComponent,
    ClientsComponent,
  ]
})
export class PagesFlexModule { }
