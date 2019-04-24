import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  imports: [RouterModule.forChild([
    { path: 'authentication/login-v1', component: AuthenticationLoginV1Component },
    { path: 'authentication/register-v1', component: AuthenticationRegisterV1Component },
    { path: 'authentication/login-v2', component: AuthenticationLoginV2Component },
    { path: 'authentication/register-v2', component: AuthenticationRegisterV2Component },
    { path: 'authentication/login-v3', component: AuthenticationLoginV3Component },
    { path: 'authentication/register-v3', component: AuthenticationRegisterV3Component },
    { path: 'authentication/login-and-register', component: AuthenticationLoginAndRegisterComponent },
    { path: 'authentication/lock-screen-v1', component: AuthenticationLockScreenV1Component },
    { path: 'authentication/lock-screen-v2', component: AuthenticationLockScreenV2Component },
    { path: 'authentication/password-reset', component: AuthenticationPasswordResetComponent },
    { path: 'authentication/email-confirm', component: AuthenticationEmailConfirmComponent },
    { path: 'invoice-print', component: InvoicePrintComponent },
  ])],
  exports: [RouterModule]
})
export class PagesBlankRoutingModule { }
