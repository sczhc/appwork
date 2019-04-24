<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-form-wizard</h3>
    <a target="_blank" href="https://github.com/cristijora/vue-form-wizard" class="ui-block-description">https://github.com/cristijora/vue-form-wizard</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

      <h4 class="ui-block-heading" style="padding-top: 0 !important;padding-bottom: 0 !important;border:0">With icon</h4>

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

      <h4 class="ui-block-heading" style="padding-top: 0 !important;padding-bottom: 0 !important;border:0">Boxed steps</h4>

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

      <h4 class="ui-block-heading" style="padding-top: 0 !important;padding-bottom: 0 !important;border:0">Vertical</h4>

      <!-- Left steps -->
      <form-wizard class="form-wizard-vertical-left">
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
  </div>
</template>

<style src="@/vendor/libs/vue-form-wizard/vue-form-wizard.scss" lang="scss"></style>

<script>
import { FormWizard, TabContent, WizardStep } from 'vue-form-wizard'

export default {
  components: {
    FormWizard,
    TabContent,
    WizardStep
  }
}
</script>
