import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteUiBaseComponent } from './complete-ui-base.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CompleteUiBaseComponent }
  ])],
  exports: [RouterModule]
})
export class CompleteUiBaseRoutingModule { }
