import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { IconsRoutingModule } from './icons-routing.module';


// *******************************************************************************
// Page components

import { FontAwesome5Component } from './font-awesome-5/font-awesome-5.component';
import { IoniconsComponent } from './ionicons/ionicons.component';
import { LineariconsComponent } from './linearicons/linearicons.component';
import { OpenIconicComponent } from './open-iconic/open-iconic.component';
import { StrokeIcons7Component } from './stroke-icons-7/stroke-icons-7.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    IconsRoutingModule
  ],
  declarations: [
    FontAwesome5Component,
    IoniconsComponent,
    LineariconsComponent,
    OpenIconicComponent,
    StrokeIcons7Component,
  ]
})
export class IconsModule { }
