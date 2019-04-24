import { Component } from '@angular/core';

@Component({
  selector: 'cui-ngx-clipboard', // tslint:disable-line
  templateUrl: './cui-ngx-clipboard.component.html'
})
export class CuiNgxClipboardComponent {
  copied = false;

  onCopy() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1000);
  }
}
