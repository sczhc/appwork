import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';


// *******************************************************************************
// Libs

import { LaddaModule } from 'angular2-ladda';
import { BlockUIModule } from 'ng-block-ui';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ClipboardModule } from 'ngx-clipboard';


// *******************************************************************************
// Page components

import { NgbRatingComponent } from './ngb-rating/ngb-rating.component';
import { MasonryComponent } from './masonry/masonry.component';
import { SpinKitComponent } from './spinkit/spinkit.component';
import { Angular2LaddaComponent } from './angular2-ladda/angular2-ladda.component';
import { NumeraljsComponent } from './numeraljs/numeraljs.component';
import { NgBlockUiComponent } from './ng-block-ui/ng-block-ui.component';
import { NgxPerfectScrollbarComponent } from './ngx-perfect-scrollbar/ngx-perfect-scrollbar.component';
import { NgxClipboardComponent } from './ngx-clipboard/ngx-clipboard.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    LaddaModule,
    BlockUIModule,
    PerfectScrollbarModule,
    ClipboardModule,

    MiscellaneousRoutingModule
  ],
  declarations: [
    NgbRatingComponent,
    MasonryComponent,
    SpinKitComponent,
    Angular2LaddaComponent,
    NumeraljsComponent,
    NgBlockUiComponent,
    NgxPerfectScrollbarComponent,
    NgxClipboardComponent,
  ]
})
export class MiscellaneousModule { }
