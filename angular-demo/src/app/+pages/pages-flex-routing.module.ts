import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesV1ListComponent } from './messages-v1-list/messages-v1-list.component';
import { MessagesV1ItemComponent } from './messages-v1-item/messages-v1-item.component';
import { MessagesV1ComposeComponent } from './messages-v1-compose/messages-v1-compose.component';
import { ChatComponent } from './chat/chat.component';
import { ClientsComponent } from './clients/clients.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'messages-v1/list', component: MessagesV1ListComponent },
    { path: 'messages-v1/item', component: MessagesV1ItemComponent },
    { path: 'messages-v1/compose', component: MessagesV1ComposeComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'clients', component: ClientsComponent },
  ])],
  exports: [RouterModule]
})
export class PagesFlexRoutingModule { }
