import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TypographyComponent } from './typography.component';

import { TypographyRoutingModule } from './typography-routing.module';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgbModule,

    TypographyRoutingModule
  ],
  declarations: [
    TypographyComponent
  ]
})
export class TypographyModule { }
