import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { TablesRoutingModule } from './tables-routing.module';


// *******************************************************************************
// Libs

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';


// *******************************************************************************
// Page components

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    NgxDatatableModule,
    Ng2SmartTableModule,

    TablesRoutingModule
  ],
  declarations: [
    BootstrapComponent,
    NgxDatatableComponent,
    Ng2SmartTableComponent
  ]
})
export class TablesModule { }
