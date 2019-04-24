 /* tslint:disable:member-ordering */
import { Component, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-carousel', // tslint:disable-line
  templateUrl: './carousel.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-swiper-wrapper/ngx-swiper-wrapper.scss',
    'carousel.scss'
  ]
})
export class CarouselComponent implements AfterViewInit {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Carousel - UI elements';
  }

  ngAfterViewInit() {
    // Trigger resize event to redraw swiper
    setTimeout(() => {
      if (document.createEvent) {
        let event;

        if (typeof document['documentMode'] === 'number' && document['documentMode'] > 10) {
          event = document.createEvent('Event');
          event.initEvent('resize', false, true);
        } else {
          event = new Event('resize');
        }

        window.dispatchEvent(event);
      } else {
        window['fireEvent']('onresize', document['createEventObject']());
      }
    }, 50);
  }

  swiperWithArrows = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  swiperWithPagination = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  swiperWithFractionPagination = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    }
  };

  swiperWithProgress = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  swiperWithScrollbar = {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    }
  };

  verticalSwiper = {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  swiperMultipleSlides = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  swiperFadeEffect = {
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  swiper3dCubeEffect = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };

  swiper3dCoverflowEffect = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };

  swiper3dFlipEffect = {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

}
