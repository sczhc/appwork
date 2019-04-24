import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteUiPluginsComponent } from './complete-ui-plugins.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CompleteUiPluginsComponent }
  ])],
  exports: [RouterModule]
})
export class CompleteUiPluginsRoutingModule { }
