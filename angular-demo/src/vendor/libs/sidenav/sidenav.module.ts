import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { SidenavLinkComponent } from './sidenav-link.component';
import { SidenavRouterLinkComponent } from './sidenav-router-link.component';
import { SidenavMenuComponent } from './sidenav-menu.component';
import { SidenavBlockComponent } from './sidenav-block.component';
import { SidenavDividerComponent } from './sidenav-divider.component';
import { SidenavHeaderComponent } from './sidenav-header.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [
    SidenavComponent,
    SidenavLinkComponent,
    SidenavRouterLinkComponent,
    SidenavMenuComponent,
    SidenavBlockComponent,
    SidenavDividerComponent,
    SidenavHeaderComponent
  ],
  exports: [
    SidenavComponent,
    SidenavLinkComponent,
    SidenavRouterLinkComponent,
    SidenavMenuComponent,
    SidenavBlockComponent,
    SidenavDividerComponent,
    SidenavHeaderComponent
  ]
})
export class SidenavModule { }
