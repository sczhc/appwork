import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// *******************************************************************************
// Layouts

import { Layout2Component } from './layout/layout-2/layout-2.component';
import { Layout2FlexComponent } from './layout/layout-2-flex/layout-2-flex.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';


// *******************************************************************************
// Routes

/* tslint:disable */
const routes: Routes = [
  // Default
  { path: '', redirectTo: 'dashboards/dashboard-1', pathMatch: 'full' },

  { path: 'dashboards', component: Layout2Component, loadChildren: './+dashboards/dashboards.module#DashboardsModule' },
  { path: 'layouts', loadChildren: './+layouts/layouts.module#LayoutsModule' },
  { path: 'typography', component: Layout2Component, loadChildren: './+typography/typography.module#TypographyModule' },
  { path: 'ui', component: Layout2Component, loadChildren: './+ui/ui.module#UiModule' },
  { path: 'forms', component: Layout2Component, loadChildren: './+forms/forms.module#FormsModule' },
  { path: 'tables', component: Layout2Component, loadChildren: './+tables/tables.module#TablesModule' },
  { path: 'charts', component: Layout2Component, loadChildren: './+charts/charts.module#ChartsModule' },
  { path: 'icons', component: Layout2Component, loadChildren: './+icons/icons.module#IconsModule' },
  { path: 'miscellaneous', component: Layout2Component, loadChildren: './+miscellaneous/miscellaneous.module#MiscellaneousModule' },

  // Pages
  { path: 'pages', component: Layout2Component, loadChildren: './+pages/pages.module#PagesModule' },
  { path: 'pages', component: Layout2FlexComponent, loadChildren: './+pages/pages-flex.module#PagesFlexModule' },
  { path: 'pages', component: LayoutBlankComponent, loadChildren: './+pages/pages-blank.module#PagesBlankModule' },

  // Complete UI
  { path: 'complete-ui/plugins', component: LayoutBlankComponent, loadChildren: './+complete-ui/complete-ui-plugins.module#CompleteUiPluginsModule' },
  { path: 'complete-ui/charts', component: LayoutBlankComponent, loadChildren: './+complete-ui/complete-ui-charts.module#CompleteUiChartsModule' },
  { path: 'complete-ui', component: LayoutBlankComponent, loadChildren: './+complete-ui/complete-ui-base.module#CompleteUiBaseModule' },
];
/* tslint:enable */

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
