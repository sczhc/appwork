import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'ngx-datatable', component: NgxDatatableComponent },
    { path: 'ng2-smart-table', component: Ng2SmartTableComponent },
  ])],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
