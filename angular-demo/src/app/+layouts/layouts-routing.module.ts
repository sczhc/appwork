import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// *******************************************************************************
// Layouts

import { Layout1Component } from '../layout/layout-1/layout-1.component';
import { Layout1FlexComponent } from '../layout/layout-1-flex/layout-1-flex.component';
import { Layout2Component } from '../layout/layout-2/layout-2.component';
import { Layout2FlexComponent } from '../layout/layout-2-flex/layout-2-flex.component';
import { LayoutWithoutNavbarComponent } from '../layout/layout-without-navbar/layout-without-navbar.component';
import { LayoutWithoutNavbarFlexComponent } from '../layout/layout-without-navbar-flex/layout-without-navbar-flex.component';
import { LayoutWithoutSidenavComponent } from '../layout/layout-without-sidenav/layout-without-sidenav.component';
import { LayoutHorizontalSidenavComponent } from '../layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component';
import { LayoutBlankComponent } from '../layout/layout-blank/layout-blank.component';


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


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'options',
      component: Layout2Component,
      children: [{ path: '', component: LayoutOptionsComponent, pathMatch: 'full' }]
    },
    {
      path: 'helpers',
      component: Layout2Component,
      children: [{ path: '', component: LayoutHelpersComponent, pathMatch: 'full' }]
    },
    {
      path: 'layout-1',
      component: Layout1Component,
      children: [{ path: '', component: Layout1ExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'layout-1-flex',
      component: Layout1FlexComponent,
      children: [{ path: '', component: Layout1FlexExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'layout-2',
      component: Layout2Component,
      children: [{ path: '', component: Layout2ExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'layout-2-flex',
      component: Layout2FlexComponent,
      children: [{ path: '', component: Layout2FlexExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'without-navbar',
      component: LayoutWithoutNavbarComponent,
      children: [{ path: '', component: WithoutNavbarExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'without-navbar-flex',
      component: LayoutWithoutNavbarFlexComponent,
      children: [{ path: '', component: WithoutNavbarFlexExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'without-sidenav',
      component: LayoutWithoutSidenavComponent,
      children: [{ path: '', component: WithoutSidenavExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'horizontal-sidenav',
      component: LayoutHorizontalSidenavComponent,
      children: [{ path: '', component: HorizontalSidenavExampleComponent, pathMatch: 'full' }]
    },
    {
      path: 'blank',
      component: LayoutBlankComponent,
      children: [{ path: '', component: BlankExampleComponent, pathMatch: 'full' }]
    }
  ])],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
