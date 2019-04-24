import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { PagesBlankRoutingModule } from './pages-blank-routing.module';


// *******************************************************************************
// Libs

// *******************************************************************************
// Page components

import { AuthenticationLoginV1Component } from './authentication-login-v1/authentication-login-v1.component';
import { AuthenticationRegisterV1Component } from './authentication-register-v1/authentication-register-v1.component';
import { AuthenticationLoginV2Component } from './authentication-login-v2/authentication-login-v2.component';
import { AuthenticationRegisterV2Component } from './authentication-register-v2/authentication-register-v2.component';
import { AuthenticationLoginV3Component } from './authentication-login-v3/authentication-login-v3.component';
import { AuthenticationRegisterV3Component } from './authentication-register-v3/authentication-register-v3.component';
import { AuthenticationLoginAndRegisterComponent } from './authentication-login-and-register/authentication-login-and-register.component';
import { AuthenticationLockScreenV1Component } from './authentication-lock-screen-v1/authentication-lock-screen-v1.component';
import { AuthenticationLockScreenV2Component } from './authentication-lock-screen-v2/authentication-lock-screen-v2.component';
import { AuthenticationPasswordResetComponent } from './authentication-password-reset/authentication-password-reset.component';
import { AuthenticationEmailConfirmComponent } from './authentication-email-confirm/authentication-email-confirm.component';
import { InvoicePrintComponent } from './invoice-print/invoice-print.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    PagesBlankRoutingModule
  ],
  declarations: [
    AuthenticationLoginV1Component,
    AuthenticationRegisterV1Component,
    AuthenticationLoginV2Component,
    AuthenticationRegisterV2Component,
    AuthenticationLoginV3Component,
    AuthenticationRegisterV3Component,
    AuthenticationLoginAndRegisterComponent,
    AuthenticationLockScreenV1Component,
    AuthenticationLockScreenV2Component,
    AuthenticationPasswordResetComponent,
    AuthenticationEmailConfirmComponent,
    InvoicePrintComponent,
  ]
})
export class PagesBlankModule { }
