import { NgModule } from '@angular/core';


// *******************************************************************************
// Services

import { ThemeSettingsService } from './theme-settings.service';


// *******************************************************************************
//

@NgModule({
  providers: [
    ThemeSettingsService
  ]
})
export class ThemeSettingsModule { }
