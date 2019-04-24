import { Component } from '@angular/core';

@Component({
  selector: 'cui-angular2-ladda', // tslint:disable-line
  templateUrl: './cui-angular2-ladda.component.html',
  styleUrls: ['../../../vendor/libs/angular2-ladda/angular2-ladda.scss']
})
export class CuiAngular2LaddaComponent {
  loading = [false, false, false, false, false, false, false, false, false, false, false, false];
  progress: any = [false, false];

  startLoading(i) {
    if (this.loading[i]) { return; }

    this.loading[i] = true;
    setTimeout(() => this.loading[i] = false, 2000);
  }

  startProgress(i) {
    if (this.progress[i] !== false) { return; }

    this.progress[i] = 0;
    const interval = setInterval(() => {
      this.progress[i] = Math.min(this.progress[i] + Math.random() * 0.1, 1);

      if (this.progress[i] === 1) {
        clearInterval(interval);
        this.progress[i] = false;
      }
    }, 200);
  }
}
