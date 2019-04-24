import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularGoogleMapsComponent } from './angular-google-maps/angular-google-maps.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { NgChartistComponent } from './ng-chartist/ng-chartist.component';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';
import { NgxTrendComponent } from './ngx-trend/ngx-trend.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'angular-google-maps', component: AngularGoogleMapsComponent },
    { path: 'ngx-charts', component: NgxChartsComponent },
    { path: 'ng-chartist', component: NgChartistComponent },
    { path: 'ng2-charts', component: Ng2ChartsComponent },
    { path: 'ngx-trend', component: NgxTrendComponent },
  ])],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
