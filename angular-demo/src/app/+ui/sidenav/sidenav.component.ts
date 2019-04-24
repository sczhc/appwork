import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-sidenav', // tslint:disable-line
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Sidenav - UI elements';
  }

  public sidenav1Collapsed = false;
  public sidenav2Collapsed = false;
  public sidenav3Collapsed = false;
  public sidenav4Collapsed = false;
  public sidenav5Collapsed = false;
  public sidenav6Collapsed = false;
}
