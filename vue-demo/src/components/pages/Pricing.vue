<template>
  <div class="container px-0">

    <h1 class="text-center font-weight-bolder pt-5 mb-3">
      Pricing plans
    </h1>
    <div class="text-center text-muted text-large font-weight-light">
      Choose the best plan that fits your needs
    </div>

    <div class="d-flex align-items-center my-5">
      <div class="flex-shrink-1 w-100 text-right text-big mr-3">Billed monthly</div>
      <label class="switcher switcher-lg switcher-success m-0">
        <input type="checkbox" class="switcher-input" v-model="billedAnnually">
        <span class="switcher-indicator">
          <span class="switcher-yes"></span>
          <span class="switcher-no"></span>
        </span>
      </label>
      <div class="flex-shrink-1 w-100 text-success text-big ml-3">Billed annually - Save {{discountPercent}}%</div>
    </div>

    <div class="row no-gutters row-bordered ui-bordered text-center">

      <div class="d-flex col-md flex-column py-4">
        <div class="display-1 text-primary my-4"><i class="lnr lnr-briefcase text-big"></i></div>
        <h5 class="m-0">Professional</h5>
        <div class="flex-grow-1">
          <div class="py-4 my-2">
            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
            <span class="display-3 d-inline-block font-weight-bold align-middle">{{planPrice(pricingData.professional)}}</span>
            <span class="d-inline-block text-muted text-big align-middle ml-2">/ {{billedAnnually ? 'yr' : 'mo'}}</span>
          </div>
          <div class="pb-5">
            <p class="ui-company-text mb-2">5 users</p>
            <p class="ui-company-text mb-2">10 projects</p>
            <p class="ui-company-text mb-0">100GB space</p>
          </div>
        </div>
        <div class="px-md-3 px-lg-5">
          <b-btn variant="outline-primary btn-round" size="lg">Get Started</b-btn>
        </div>
      </div>

      <div class="d-flex col-md flex-column py-4">
        <div class="display-1 text-primary my-4"><i class="lnr lnr-store text-big"></i></div>
        <h5 class="m-0">Small Buisness</h5>
        <div class="flex-grow-1">
          <div class="py-4 my-2">
            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
            <span class="display-3 d-inline-block font-weight-bold align-middle">{{planPrice(pricingData.smallBuisness)}}</span>
            <span class="d-inline-block text-muted text-big align-middle ml-2">/ {{billedAnnually ? 'yr' : 'mo'}}</span>
          </div>
          <div class="pb-5">
            <p class="ui-company-text mb-2">20 users</p>
            <p class="ui-company-text mb-2">100 projects</p>
            <p class="ui-company-text mb-0">300GB space</p>
          </div>
        </div>
        <div class="px-md-3 px-lg-5">
          <b-btn variant="primary btn-round" size="lg">Get Started</b-btn>
        </div>
      </div>

      <div class="d-flex col-md flex-column py-4">
        <div class="display-1 text-primary my-4"><i class="lnr lnr-apartment text-big"></i></div>
        <h5 class="m-0">Enterprise</h5>
        <div class="flex-grow-1">
          <div class="py-4 my-2">
            <span class="d-inline-block text-muted text-big align-middle mr-2">$</span>
            <span class="display-3 d-inline-block font-weight-bold align-middle">{{planPrice(pricingData.enterprise)}}</span>
            <span class="d-inline-block text-muted text-big align-middle ml-2">/ {{billedAnnually ? 'yr' : 'mo'}}</span>
          </div>
          <div class="pb-5">
            <p class="ui-company-text mb-2">Unlimited users</p>
            <p class="ui-company-text mb-2">Unlimited projects</p>
            <p class="ui-company-text mb-0">1000GB space</p>
          </div>
        </div>
        <div class="px-md-3 px-lg-5">
          <b-btn variant="outline-primary btn-round" size="lg">Get Started</b-btn>
        </div>
      </div>

    </div>

    <div class="text-center text-big mt-5">
      <a href="javascript:void(0)">Get started with a 14-day no-obligation free trial</a>
    </div>

    <hr class="border-light mt-5">
    <h3 class="text-center font-weight-light my-5">Frequently Asked Questions</h3>

    <div class="row">
      <div class="col-md-6">

        <h5 class="mb-2">Dapibus ac facilisis in?</h5>
        <p class="ui-company-text text-muted mb-4">
          Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.
        </p>

        <h5 class="mb-2">Cras justo odio?</h5>
        <p class="ui-company-text text-muted mb-4">
          Etiam vivendo eu sea, purto ponderum mediocritatem at pro.
        </p>

        <h5 class="mb-2">Porta ac consectetur ac?</h5>
        <p class="ui-company-text text-muted mb-4">
          Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.
        </p>

        <h5 class="mb-2">Ne ornatus albucius ius?</h5>
        <p class="ui-company-text text-muted mb-4">
          Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.
        </p>

      </div>
      <div class="col-md-6">

        <h5 class="mb-2">Ne ornatus albucius ius?</h5>
        <p class="ui-company-text text-muted mb-4">
          Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.
        </p>

        <h5 class="mb-2">Quo insolens intellegam dissentiet at?</h5>
        <p class="ui-company-text text-muted mb-4">
          Ex fugit legimus fuisset per. Ex quidam option diceret ius.
        </p>

        <h5 class="mb-2">Ad his assum delenit blandit?</h5>
        <p class="ui-company-text text-muted mb-4">
          Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.
        </p>

        <h5 class="mb-2">Dapibus ac facilisis in?</h5>
        <p class="ui-company-text text-muted mb-4">
          Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.
        </p>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-pricing',
  metaInfo: {
    title: 'Pricing - Pages'
  },
  data: () => ({
    billedAnnually: true,
    discountPercent: 20,

    pricingData: {
      professional: 12,
      smallBuisness: 20,
      enterprise: 50
    }
  }),
  methods: {
    planPrice (price) {
      return this.billedAnnually ? Math.floor(price * 12 * (100 - this.discountPercent) / 100) : price
    }
  }
}
</script>
