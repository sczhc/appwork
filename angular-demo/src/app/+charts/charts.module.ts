import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { ChartsRoutingModule } from './charts-routing.module';


// *******************************************************************************
// Libs

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';
import { TrendModule } from 'ngx-trend';


// *******************************************************************************
// Page components

import { AngularGoogleMapsComponent } from './angular-google-maps/angular-google-maps.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { NgChartistComponent } from './ng-chartist/ng-chartist.component';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';
import { NgxTrendComponent } from './ngx-trend/ngx-trend.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    AgmCoreModule,
    NgxChartsModule,
    ChartistModule,
    Ng2ChartsModule,
    TrendModule,

    ChartsRoutingModule
  ],
  declarations: [
    AngularGoogleMapsComponent,
    NgxChartsComponent,
    NgChartistComponent,
    Ng2ChartsComponent,
    NgxTrendComponent,
  ]
})
export class ChartsModule { }
