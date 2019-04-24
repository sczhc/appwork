import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Dashboard1Component } from './dashboard-1/dashboard-1.component';
import { Dashboard2Component } from './dashboard-2/dashboard-2.component';
import { Dashboard3Component } from './dashboard-3/dashboard-3.component';
import { Dashboard4Component } from './dashboard-4/dashboard-4.component';
import { Dashboard5Component } from './dashboard-5/dashboard-5.component';

import { DashboardsRoutingModule } from './dashboards-routing.module';


// *******************************************************************************
// Libs

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    Ng2ChartsModule,
    PerfectScrollbarModule,

    DashboardsRoutingModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard5Component
  ]
})
export class DashboardsModule { }
