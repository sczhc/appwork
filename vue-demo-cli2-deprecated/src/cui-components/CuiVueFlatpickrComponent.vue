<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-flatpickr-component</h3>
    <a target="_blank" href="https://github.com/ankurk91/vue-flatpickr-component" class="ui-block-description">https://github.com/ankurk91/vue-flatpickr-component</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="alert alert-warning rtl-only mt-5">
      Flatpickr does not support animations in RTL mode.
    </div>

    <div class="cui-example cui-example-vertical-spacing">
      <flat-pickr v-model="date" :config="dateConfig" :placeholder="!isIEMode ? 'Date picker' : null" />
      <flat-pickr v-model="time" :config="timeConfig" :placeholder="!isIEMode ? 'Time picker' : null" />
      <flat-pickr v-model="datetime" :config="datetimeConfig" :placeholder="!isIEMode ? 'Datetime picker' : null" />
      <flat-pickr v-model="full" :config="fullConfig" :placeholder="!isIEMode ? 'Features' : null" />
      <flat-pickr v-model="range" :config="rangeConfig" :placeholder="!isIEMode ? 'Range picker' : null" />
      <div>
        <flat-pickr v-model="inline" :config="inlineConfig" :placeholder="!isIEMode ? 'Inline datepicker' : null" input-class="d-none" />
      </div>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>

<script>
import flatPickr from 'vue-flatpickr-component'

function isRTL () {
  return document.documentElement.getAttribute('dir') === 'rtl' ||
         document.body.getAttribute('dir') === 'rtl'
}

export default {
  components: {
    flatPickr
  },
  data: () => ({
    date: null,
    time: null,
    datetime: null,
    full: null,
    range: null,
    inline: null,

    dateConfig: {
      altInput: true,
      animate: !isRTL()
    },

    timeConfig: {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      animate: !isRTL()
    },

    datetimeConfig: {
      enableTime: true,
      altInput: true,
      animate: !isRTL()
    },

    fullConfig: {
      weekNumbers: true,
      enableTime: true,
      mode: 'multiple',
      minDate: 'today',
      altInput: true,
      animate: !isRTL()
    },

    rangeConfig: {
      mode: 'range',
      altInput: true,
      animate: !isRTL()
    },

    inlineConfig: {
      inline: true,
      altInput: true,
      allowInput: false,
      animate: !isRTL()
    }
  })
}
</script>
