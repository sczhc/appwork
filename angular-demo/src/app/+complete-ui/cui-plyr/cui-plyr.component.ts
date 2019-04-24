import { Component, ViewChild, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

import * as plyr from 'plyr';

@Component({
  selector: 'cui-plyr', // tslint:disable-line
  templateUrl: './cui-plyr.component.html',
  styleUrls: ['../../../vendor/libs/plyr/plyr.scss']
})
export class CuiPlyrComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayerEl;
  @ViewChild('audioPlayer') audioPlayerEl;

  videoPlayer: any;
  audioPlayer: any;

  constructor(public appService: AppService, private zone: NgZone) {}

  ngAfterViewInit() {
    const options = {
      tooltips: {
        controls: false,
        seek: true
      }
    };

    this.zone.runOutsideAngular(() => {
      this.videoPlayer = plyr.setup(this.videoPlayerEl.nativeElement, options)[0];
      this.audioPlayer = plyr.setup(this.audioPlayerEl.nativeElement, options)[0];
    });

    // RTL: Fix time displaying
    if (this.appService.isRTL) {
      const plyrRtlTooltip = (instance, e) => {
        const duration = instance.getDuration();
        const container = instance.getContainer();

        if (!options.tooltips.seek || duration === 0 || !container) { return; }

        const clientRect = container.querySelector('.plyr__progress').getBoundingClientRect();

        // Revert percents
        let percent = 100 - (100 / clientRect.width * (e.pageX - clientRect.left));

        percent = percent < 0 ? 0 : (percent > 100 ? 100 : percent);

        const time = duration / 100 * percent;

        const secs = ('0' + parseInt(<any> (time % 60), 10)).slice(-2);
        const mins = ('0' + parseInt(<any> ((time / 60) % 60), 10)).slice(-2);
        const hours = parseInt(<any> ((time / 60 / 60) % 60), 10);
        const displayHours = parseInt(<any> ((duration / 60 / 60) % 60), 10) > 0;

        container.querySelector('.plyr__progress .plyr__tooltip').innerHTML =
          (displayHours ? hours + ':' : '') + mins + ':' + secs;
      };

      this.videoPlayer.on('mouseenter mouseleave mousemove', e => {
        plyrRtlTooltip(this.videoPlayer, e);
      });
      this.audioPlayer.on('mouseenter mouseleave mousemove', e => {
        plyrRtlTooltip(this.audioPlayer, e);
      });
    }
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      this.videoPlayer.destroy();
      this.audioPlayer.destroy();
    });
  }
}
