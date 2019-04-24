import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteUiChartsComponent } from './complete-ui-charts.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CompleteUiChartsComponent }
  ])],
  exports: [RouterModule]
})
export class CompleteUiChartsRoutingModule { }
