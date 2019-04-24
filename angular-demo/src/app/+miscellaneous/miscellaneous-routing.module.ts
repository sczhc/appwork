import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  imports: [RouterModule.forChild([
    { path: 'ngb-rating', component: NgbRatingComponent },
    { path: 'masonry', component: MasonryComponent },
    { path: 'spinkit', component: SpinKitComponent },
    { path: 'angular2-ladda', component: Angular2LaddaComponent },
    { path: 'numeraljs', component: NumeraljsComponent },
    { path: 'ng-block-ui', component: NgBlockUiComponent },
    { path: 'ngx-perfect-scrollbar', component: NgxPerfectScrollbarComponent },
    { path: 'ngx-clipboard', component: NgxClipboardComponent },
  ])],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
