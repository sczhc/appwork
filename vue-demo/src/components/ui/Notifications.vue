<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Notifications
    </h4>

    <b-card no-body header="Alerts" header-tag="h6" class="mb-4">
      <div class="row no-gutters row-bordered">
        <div class="demo-vertical-spacing-sm col-sm-6 p-4">
          <div class="text-light small font-weight-semibold mb-3">Default</div>

          <b-alert show dismissible variant="primary">
            This is a primary alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="secondary">
            This is a secondary alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="success">
            This is a success alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="danger">
            This is a danger alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="warning">
            This is a warning alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="info">
            This is an info alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark">
            This is a dark alert — check it out!
          </b-alert>
        </div>

        <div class="demo-vertical-spacing-sm col-sm-6 p-4">
          <div class="text-light small font-weight-semibold mb-3">Dark</div>

          <b-alert show dismissible variant="dark-primary">
            This is a primary alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-secondary">
            This is a secondary alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-success">
            This is a success alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-danger">
            This is a danger alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-warning">
            This is a warning alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-info">
            This is an info alert — check it out!
          </b-alert>

          <b-alert show dismissible variant="dark-dark">
            This is a dark alert — check it out!
          </b-alert>
        </div>
      </div>
    </b-card>

    <b-card header="Vue Notification" header-tag="h6" class="mb-4">
      <div class="cui-example-inline-spacing">
        <notifications group="notifications-default" />
        <notifications group="notifications-top-left" position="top left" />
        <notifications group="notifications-top-center" position="top center" />
        <notifications group="notifications-bottom-right" position="bottom right" />
        <notifications group="notifications-bottom-left" position="bottom left" />
        <notifications group="notifications-bottom-center" position="bottom center" />
        <notifications group="notifications-custom-template" :duration="5000" animation-name="v-fade-left" position="top left">
          <template slot="body" slot-scope="props">
            <div class="media bg-primary text-white p-3 mb-2" @click="props.close">
              <div class="media align-items-center w-100">
                <div class="mr-3">
                  <i class="pe-7s-shield" style="font-size: 250%;"></i>
                </div>
                <div class="media-body">
                  <strong>{{ props.item.title }}</strong><br>
                  {{ props.item.text }}
                </div>
              </div>
            </div>
          </template>
        </notifications>

        <!-- Examples -->
        <b-btn @click="showDefault('notifications-default')">Default</b-btn>
        <b-btn @click="showDefault('notifications-top-left')">Top Left</b-btn>
        <b-btn @click="showDefault('notifications-top-center')">Top Center</b-btn>
        <b-btn @click="showDefault('notifications-bottom-right')">Bottom Right</b-btn>
        <b-btn @click="showDefault('notifications-bottom-left')">Bottom Left</b-btn>
        <b-btn @click="showDefault('notifications-bottom-center')">Bottom Center</b-btn>

        <br>
        <br>

        <b-btn @click="showCustom('bg-secondary text-white')">Secondary</b-btn>
        <b-btn @click="showCustom('bg-success text-white')">Success</b-btn>
        <b-btn @click="showCustom('bg-warning text-dark')">Warning</b-btn>
        <b-btn @click="showCustom('bg-info text-white')">Info</b-btn>
        <b-btn @click="showCustom('bg-danger text-white')">Danger</b-btn>
        <b-btn @click="showCustom('bg-dark text-white')">Dark</b-btn>

        <br>
        <br>

        <b-btn @click="showCustomTemplate()">Custom template</b-btn>
      </div>
    </b-card>

    <b-card header="Vue Toasted" header-tag="h6" class="mb-4">
      <label class="form-label mb-2">Text</label>
      <b-input v-model="toastText" />

      <label class="form-label mt-4 mb-2">Style</label>
      <b-radio-group v-model="toastStyle" :options="toastStyles" />

      <label class="form-label mt-4 mb-2">Vertical position</label>
      <b-radio-group v-model="toastVerticalPosition" :options="toastVerticalPositions" />

      <label class="form-label mt-4 mb-2">Horizontal position</label>
      <b-radio-group v-model="toastHorizontalPosition" :options="toastHorizontalPositions" />

      <label class="form-label mt-4 mb-2">Variant</label>
      <b-radio-group v-model="toastVariant" :options="toastVariants" />

      <div class="mt-4 mb-2">
        <b-check v-model="toastActions">Show actions</b-check>
      </div>

      <b-btn @click="showToast()" class="mt-4">Show Toast</b-btn>
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-notification/vue-notification.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-toasted/vue-toasted.scss" lang="scss"></style>

<!-- Custom template animation -->
<style>
  .v-fade-left-enter-active,
  .v-fade-left-leave-active,
  .v-fade-left-move {
    transition: all .5s;
  }
  .v-fade-left-enter,
  .v-fade-left-leave-to {
    opacity: 0;
    transform: translateX(-500px) scale(0.2);
  }
</style>

<script>
import Vue from 'vue'
import Notifications from 'vue-notification'
import Toasted from 'vue-toasted'

Vue.use(Notifications)
Vue.use(Toasted)

export default {
  name: 'ui-notifications',
  metaInfo: {
    title: 'Notifications - UI elements'
  },
  data: () => ({
    //
    // vue-toasted
    //

    toastText: '<i class="ion ion-md-checkmark mr-2"></i> Toasted!',
    toastActions: false,

    toastStyle: 'primary',
    toastStyles: [
      { text: 'Default', value: 'primary' },
      { text: 'Bubble', value: 'bubble' },
      { text: 'Outline', value: 'outline' }
    ],

    toastVerticalPosition: 'top',
    toastVerticalPositions: [
      { text: 'Top', value: 'top' },
      { text: 'Bottom', value: 'bottom' }
    ],

    toastHorizontalPosition: 'right',
    toastHorizontalPositions: [
      { text: 'Left', value: 'left' },
      { text: 'Center', value: 'center' },
      { text: 'Right', value: 'right' }
    ],

    toastVariant: null,
    toastVariants: [
      { text: 'None', value: null },
      { text: 'Primary', value: 'primary' },
      { text: 'Secondary', value: 'secondary' },
      { text: 'Success', value: 'success' },
      { text: 'Warning', value: 'warning' },
      { text: 'Info', value: 'info' },
      { text: 'Danger', value: 'danger' },
      { text: 'Dark', value: 'dark' }
    ]
  }),
  methods: {
    //
    // vue-notification
    //

    showDefault (group) {
      this.$notify({
        group: group,
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
    },
    showCustom (classes) {
      this.$notify({
        group: 'notifications-default',
        type: classes,
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
    },
    showCustomTemplate () {
      this.$notify({
        group: 'notifications-custom-template',
        title: 'Important message',
        text: 'Hello user! This is a custom notification!'
      })
    },

    //
    // vue-toasted
    //

    getCustomClasses () {
      if (!this.toastVariant) return null

      if (this.toastStyle !== 'outline') {
        return `bg-${this.toastVariant} text-${this.toastVariant === 'warning' ? 'dark' : 'white'}`
      } else {
        return `border-${this.toastVariant} text-${this.toastVariant}`
      }
    },
    getActionCustomClasses () {
      if (!this.toastVariant) return null

      if (this.toastStyle !== 'outline') {
        return `opacity-75 text-${this.toastVariant === 'warning' ? 'dark' : 'white'}`
      } else {
        return `opacity-75 text-${this.toastVariant}`
      }
    },
    showToast () {
      const actions = [{
        text: 'Cancel',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        },
        class: this.getActionCustomClasses()
      }, {
        text: 'Undo',
        push: {
          name: 'somewhere',
          dontClose: true
        },
        class: this.getActionCustomClasses()
      }]

      this.$toasted.show(this.toastText, {
        theme: this.toastStyle,
        position: `${this.toastVerticalPosition}-${this.toastHorizontalPosition}`,
        action: this.toastActions ? actions : null,
        icon: this.toastIcon || null,
        className: this.getCustomClasses(),
        duration: 4000
      })
    }
  }
}
</script>
