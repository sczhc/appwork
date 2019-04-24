<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Vue Form Wizard
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <form-wizard>
      <!-- Allow html in tab title (this template required for the proper styling) -->
      <template slot="step" slot-scope="props">
        <wizard-step :tab="props.tab" @click.native="props.navigateToTab(props.index)" @keyup.enter.native="props.navigateToTab(props.index)" :transition="props.transition" :index="props.index">
          <span slot="title" :class="{'text-danger':props.tab.validationError}" v-html="props.tab.title"></span>
        </wizard-step>
      </template>
      <!-- / -->

      <tab-content title="<div class='small text-muted'>FIRST STEP</div>Keyboard">
        <b-card class="mb-3">
          Step Content 1
        </b-card>
      </tab-content>
      <tab-content title="<div class='small text-muted'>SECOND STEP</div>Effects">
        <b-card class="mb-3">
          Step Content 2
        </b-card>
       </tab-content>
       <tab-content title="<div class='small text-muted'>THIRD STEP</div>Pager">
         <b-card class="mb-3">
           Step Content 3
         </b-card>
       </tab-content>

      <!-- Buttons -->
       <b-btn variant="default" slot="prev">Back</b-btn>
       <b-btn variant="default" slot="next">Next</b-btn>
       <b-btn variant="primary" slot="finish">Finish</b-btn>
    </form-wizard>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      With icon
    </h6>

    <form-wizard>
      <!-- Allow html in tab title (this template required for the proper styling) -->
      <template slot="step" slot-scope="props">
        <wizard-step :tab="props.tab" @click.native="props.navigateToTab(props.index)" @keyup.enter.native="props.navigateToTab(props.index)" :transition="props.transition" :index="props.index">
          <span slot="title" :class="{'text-danger':props.tab.validationError}" v-html="props.tab.title"></span>
        </wizard-step>
      </template>
      <!-- / -->

      <tab-content icon="ion ion-ios-keypad" title="Keyboard<div class='small text-muted'>Set up shortcuts</div>">
        <b-card class="mb-3">
          Step Content 1
        </b-card>
      </tab-content>
      <tab-content icon="ion ion-ios-color-wand" title="Effects<div class='small text-muted'>Add effects</div>">
        <b-card class="mb-3">
          Step Content 2
        </b-card>
       </tab-content>
       <tab-content icon="ion ion-md-copy" title="Pager<div class='small text-muted'>Select pager options</div>">
         <b-card class="mb-3">
           Step Content 3
         </b-card>
       </tab-content>
       <tab-content icon="ion ion-md-notifications-outline" title="Notifications<div class='small text-muted'>Set up notifications</div>">
         <b-card class="mb-3">
           Step Content 4
         </b-card>
       </tab-content>

      <!-- Buttons -->
       <b-btn variant="default" slot="prev">Back</b-btn>
       <b-btn variant="default" slot="next">Next</b-btn>
       <b-btn variant="primary" slot="finish">Finish</b-btn>
    </form-wizard>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      Boxed steps
    </h6>

    <form-wizard class="form-wizard-boxed-steps">
      <!-- Allow html in tab title (this template required for the proper styling) -->
      <template slot="step" slot-scope="props">
        <wizard-step :tab="props.tab" @click.native="props.navigateToTab(props.index)" @keyup.enter.native="props.navigateToTab(props.index)" :transition="props.transition" :index="props.index">
          <span slot="title" :class="{'text-danger':props.tab.validationError}" v-html="props.tab.title"></span>
        </wizard-step>
      </template>
      <!-- / -->

      <tab-content title="<div class='small text-muted'>FIRST STEP</div>Keyboard">
        <b-card class="mb-3">
          Step Content 1
        </b-card>
      </tab-content>
      <tab-content title="<div class='small text-muted'>SECOND STEP</div>Effects">
        <b-card class="mb-3">
          Step Content 2
        </b-card>
       </tab-content>
       <tab-content title="<div class='small text-muted'>THIRD STEP</div>Pager">
         <b-card class="mb-3">
           Step Content 3
         </b-card>
       </tab-content>

      <!-- Buttons -->
       <b-btn variant="default" slot="prev">Back</b-btn>
       <b-btn variant="default" slot="next">Next</b-btn>
       <b-btn variant="primary" slot="finish">Finish</b-btn>
    </form-wizard>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      Vertical
    </h6>

    <!-- Left steps -->
    <form-wizard class="form-wizard-vertical-left mb-5">
      <!-- Allow html in tab title (this template required for the proper styling) -->
      <template slot="step" slot-scope="props">
        <wizard-step :tab="props.tab" @click.native="props.navigateToTab(props.index)" @keyup.enter.native="props.navigateToTab(props.index)" :transition="props.transition" :index="props.index">
          <span slot="title" :class="{'text-danger':props.tab.validationError}" v-html="props.tab.title"></span>
        </wizard-step>
      </template>
      <!-- / -->

      <tab-content icon="ion ion-ios-keypad" title="<div class='small text-muted'>FIRST STEP</div>Keyboard">
        <b-card class="mb-3">
          Step Content 1
        </b-card>
      </tab-content>
      <tab-content icon="ion ion-ios-color-wand" title="<div class='small text-muted'>SECOND STEP</div>Effects">
        <b-card class="mb-3">
          Step Content 2
        </b-card>
       </tab-content>
       <tab-content icon="ion ion-md-copy" title="<div class='small text-muted'>THIRD STEP</div>Pager">
         <b-card class="mb-3">
           Step Content 3
         </b-card>
       </tab-content>

      <!-- Buttons -->
       <b-btn variant="default" slot="prev">Back</b-btn>
       <b-btn variant="default" slot="next">Next</b-btn>
       <b-btn variant="primary" slot="finish">Finish</b-btn>
    </form-wizard>

    <!-- Right steps -->
    <form-wizard class="form-wizard-vertical-right">
      <!-- Allow html in tab title (this template required for the proper styling) -->
      <template slot="step" slot-scope="props">
        <wizard-step :tab="props.tab" @click.native="props.navigateToTab(props.index)" @keyup.enter.native="props.navigateToTab(props.index)" :transition="props.transition" :index="props.index">
          <span slot="title" :class="{'text-danger':props.tab.validationError}" v-html="props.tab.title"></span>
        </wizard-step>
      </template>
      <!-- / -->

      <tab-content icon="ion ion-ios-keypad" title="<div class='small text-muted'>FIRST STEP</div>Keyboard">
        <b-card class="mb-3">
          Step Content 1
        </b-card>
      </tab-content>
      <tab-content icon="ion ion-ios-color-wand" title="<div class='small text-muted'>SECOND STEP</div>Effects">
        <b-card class="mb-3">
          Step Content 2
        </b-card>
       </tab-content>
       <tab-content icon="ion ion-md-copy" title="<div class='small text-muted'>THIRD STEP</div>Pager">
         <b-card class="mb-3">
           Step Content 3
         </b-card>
       </tab-content>

      <!-- Buttons -->
       <b-btn variant="default" slot="prev">Back</b-btn>
       <b-btn variant="default" slot="next">Next</b-btn>
       <b-btn variant="primary" slot="finish">Finish</b-btn>
    </form-wizard>

  </div>
</template>

<style src="@/vendor/libs/vue-form-wizard/vue-form-wizard.scss" lang="scss"></style>

<script>
import { FormWizard, TabContent, WizardStep } from 'vue-form-wizard'

export default {
  name: 'forms-vue-form-wizard',
  metaInfo: {
    title: 'Vue Form Wizard - Forms'
  },
  components: {
    FormWizard,
    TabContent,
    WizardStep
  }
}
</script>
