import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';

// *******************************************************************************
// Components

import { LayoutOptionsComponent } from './layout-options/layout-options.component';
import { LayoutHelpersComponent } from './layout-helpers/layout-helpers.component';
import { Layout1ExampleComponent } from './layout-1-example/layout-1-example.component';
import { Layout1FlexExampleComponent } from './layout-1-flex-example/layout-1-flex-example.component';
import { Layout2ExampleComponent } from './layout-2-example/layout-2-example.component';
import { Layout2FlexExampleComponent } from './layout-2-flex-example/layout-2-flex-example.component';
import { WithoutNavbarExampleComponent } from './without-navbar-example/without-navbar-example.component';
import { WithoutNavbarFlexExampleComponent } from './without-navbar-flex-example/without-navbar-flex-example.component';
import { WithoutSidenavExampleComponent } from './without-sidenav-example/without-sidenav-example.component';
import { HorizontalSidenavExampleComponent } from './horizontal-sidenav-example/horizontal-sidenav-example.component';
import { BlankExampleComponent } from './blank-example/blank-example.component';

import { LayoutsRoutingModule } from './layouts-routing.module';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LayoutModule,

    LayoutsRoutingModule
  ],
  declarations: [
    LayoutOptionsComponent,
    LayoutHelpersComponent,
    Layout1ExampleComponent,
    Layout1FlexExampleComponent,
    Layout2ExampleComponent,
    Layout2FlexExampleComponent,
    WithoutNavbarExampleComponent,
    WithoutNavbarFlexExampleComponent,
    WithoutSidenavExampleComponent,
    HorizontalSidenavExampleComponent,
    BlankExampleComponent
  ]
})
export class LayoutsModule { }
