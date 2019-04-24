<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-notification</h3>
    <a target="_blank" href="https://github.com/euvl/vue-notification" class="ui-block-description">https://github.com/euvl/vue-notification</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-inline-spacing">
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
  </div>
</template>

<style src="@/vendor/libs/vue-notification/vue-notification.scss" lang="scss"></style>

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

Vue.use(Notifications)

export default {
  methods: {
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
    }
  }
}
</script>
