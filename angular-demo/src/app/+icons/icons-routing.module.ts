import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesome5Component } from './font-awesome-5/font-awesome-5.component';
import { IoniconsComponent } from './ionicons/ionicons.component';
import { LineariconsComponent } from './linearicons/linearicons.component';
import { OpenIconicComponent } from './open-iconic/open-iconic.component';
import { StrokeIcons7Component } from './stroke-icons-7/stroke-icons-7.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'font-awesome-5', component: FontAwesome5Component },
    { path: 'ionicons', component: IoniconsComponent },
    { path: 'linearicons', component: LineariconsComponent },
    { path: 'open-iconic', component: OpenIconicComponent },
    { path: 'stroke-icons-7', component: StrokeIcons7Component },
  ])],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
