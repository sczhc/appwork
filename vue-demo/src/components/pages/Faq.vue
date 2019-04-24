<template>
  <div>

    <h3 class="text-center font-weight-bold py-3 mb-4">
      Frequently Asked Questions
    </h3>
    <hr class="border-light container-m--x my-0">

    <div class="row mt-4">
      <div class="col-lg-4 col-xl-3">

        <div>
          <a href="javascript:void(0)" class="media align-items-center bg-lighter text-dark py-3 px-4">
            <div class="ion ion-md-help-circle-outline ui-w-30 text-center text-xlarge"></div>
            <div class="media-body ml-3">
              Common
              <div class="text-muted small">Donec sagittis urna eu leo</div>
            </div>
          </a>
          <a href="javascript:void(0)" class="media align-items-center bg-lighter text-dark py-3 px-4">
            <div class="ion ion-ios-help-buoy ui-w-30 text-center text-xlarge"></div>
            <div class="media-body ml-3">
              Knowledge Base
              <div class="text-muted small">Donec sagittis urna eu leo</div>
            </div>
          </a>
          <a href="javascript:void(0)" class="media align-items-center bg-lighter text-dark py-3 px-4">
            <div class="ion ion-md-card ui-w-30 text-center text-xlarge"></div>
            <div class="media-body ml-3">
              Purchase
              <div class="text-muted small">Donec sagittis urna eu leo</div>
            </div>
          </a>
          <a href="javascript:void(0)" class="media align-items-center bg-lighter text-dark py-3 px-4">
            <div class="ion ion-ios-business ui-w-30 text-center text-xlarge"></div>
            <div class="media-body ml-3">
              Partnership
              <div class="text-muted small">Donec sagittis urna eu leo</div>
            </div>
          </a>
        </div>

        <div class="text-center mt-4 mb-5">
          <b-btn variant="outline-primary">Contact Support</b-btn>
        </div>

      </div>
      <div class="col">

        <h4 class="media align-items-center my-4">
          <div class="ion ion-md-help-circle-outline ui-w-60 text-center text-large"></div>
          <div class="media-body ml-1">
            Common
            <div class="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
          </div>
        </h4>

        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-1 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ne ornatus albucius ius?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-1" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-2 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Quo insolens intellegam dissentiet at?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-2" class="text-muted">
            <div class="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-3 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ad his assum delenit blandit?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-3" class="text-muted">
            <div class="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-4 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Dapibus ac facilisis in?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-4" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-5 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Cras justo odio?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-5" class="text-muted">
            <div class="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-6 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Porta ac consectetur ac?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-6" class="text-muted">
            <div class="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
          </b-collapse>
        </div>

        <hr class="my-5">

        <h4 class="media align-items-center mb-4">
          <div class="ion ion-ios-help-buoy ui-w-60 text-center text-large"></div>
          <div class="media-body ml-1">
            Knowledge Base
            <div class="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
          </div>
        </h4>

        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-21 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ne ornatus albucius ius?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-21" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-22 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Quo insolens intellegam dissentiet at?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-22" class="text-muted">
            <div class="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-23 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ad his assum delenit blandit?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-23" class="text-muted">
            <div class="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-24 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Dapibus ac facilisis in?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-24" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-25 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Cras justo odio?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-25" class="text-muted">
            <div class="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-26 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Porta ac consectetur ac?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-26" class="text-muted">
            <div class="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
          </b-collapse>
        </div>

        <hr class="my-5">

        <h4 class="media align-items-center mb-4">
          <div class="ion ion-md-card ui-w-60 text-center text-large"></div>
          <div class="media-body ml-1">
            Purchase
            <div class="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
          </div>
        </h4>

        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-31 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ne ornatus albucius ius?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-31" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-32 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Quo insolens intellegam dissentiet at?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-32" class="text-muted">
            <div class="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-33 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ad his assum delenit blandit?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-33" class="text-muted">
            <div class="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-34 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Dapibus ac facilisis in?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-34" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-35 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Cras justo odio?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-35" class="text-muted">
            <div class="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-36 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Porta ac consectetur ac?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-36" class="text-muted">
            <div class="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
          </b-collapse>
        </div>

        <hr class="my-5">

        <h4 class="media align-items-center mb-4">
          <div class="ion ion-ios-business ui-w-60 text-center text-large"></div>
          <div class="media-body ml-1">
            Partnership
            <div class="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
          </div>
        </h4>

        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-41 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ne ornatus albucius ius?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-41" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-42 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Quo insolens intellegam dissentiet at?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-42" class="text-muted">
            <div class="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-43 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Ad his assum delenit blandit?
            <span class="collapse-icon"></span>
          </a>
          <b-collapse id="faq-43" class="text-muted">
            <div class="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-44 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Dapibus ac facilisis in?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-44" class="text-muted">
            <div class="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-45 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Cras justo odio?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-45" class="text-muted">
            <div class="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
          </b-collapse>
        </div>
        <div class="bg-white ui-bordered mb-2">
          <a v-b-toggle.faq-46 href="javascript:void(0)" class="d-flex justify-content-between text-dark py-3 px-4">
            Porta ac consectetur ac?
            <span class="collapse-icon d-inline-block ml-1"></span>
          </a>
          <b-collapse id="faq-46" class="text-muted">
            <div class="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
          </b-collapse>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-help-center',
  metaInfo: {
    title: 'Help center - Pages'
  }
}
</script>
