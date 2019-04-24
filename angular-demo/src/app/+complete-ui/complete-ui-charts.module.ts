import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// *******************************************************************************
//

import { CompleteUiChartsComponent } from './complete-ui-charts.component';
import { CompleteUiChartsRoutingModule } from './complete-ui-charts-routing.module';


// *******************************************************************************
// Libs

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TrendModule } from 'ngx-trend';


// *******************************************************************************
// Page components

import { CuiAngularGoogleMapsComponent } from './cui-angular-google-maps/cui-angular-google-maps.component';
import { CuiNgxChartsComponent } from './cui-ngx-charts/cui-ngx-charts.component';
import { CuiNgChartistComponent } from './cui-ng-chartist/cui-ng-chartist.component';
import { CuiNg2ChartsComponent } from './cui-ng2-charts/cui-ng2-charts.component';
import { CuiNgxTrendComponent } from './cui-ngx-trend/cui-ngx-trend.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    CompleteUiChartsRoutingModule,

    // Libs
    AgmCoreModule,
    NgxChartsModule,
    ChartistModule,
    ChartsModule,
    TrendModule
  ],
  declarations: [
    CompleteUiChartsComponent,

    // Page components
    CuiAngularGoogleMapsComponent,
    CuiNgxChartsComponent,
    CuiNgChartistComponent,
    CuiNg2ChartsComponent,
    CuiNgxTrendComponent,
  ]
})
export class CompleteUiChartsModule { }
