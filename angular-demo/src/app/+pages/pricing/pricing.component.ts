import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Pricing - Pages';
  }

  billedAnnually = true;
  discountPercent = 20;

  pricingData = {
    professional: 12,
    smallBuisness: 20,
    enterprise: 50
  };

  planPrice(price) {
    return this.billedAnnually ? Math.floor(price * 12 * (100 - this.discountPercent) / 100) : price;
  }

}
