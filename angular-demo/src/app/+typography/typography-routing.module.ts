import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TypographyComponent }
  ])],
  exports: [RouterModule]
})
export class TypographyRoutingModule { }
