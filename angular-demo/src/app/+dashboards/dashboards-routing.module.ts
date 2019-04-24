import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from './dashboard-1/dashboard-1.component';
import { Dashboard2Component } from './dashboard-2/dashboard-2.component';
import { Dashboard3Component } from './dashboard-3/dashboard-3.component';
import { Dashboard4Component } from './dashboard-4/dashboard-4.component';
import { Dashboard5Component } from './dashboard-5/dashboard-5.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dashboard-1', component: Dashboard1Component },
    { path: 'dashboard-2', component: Dashboard2Component },
    { path: 'dashboard-3', component: Dashboard3Component },
    { path: 'dashboard-4', component: Dashboard4Component },
    { path: 'dashboard-5', component: Dashboard5Component }
  ])],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
