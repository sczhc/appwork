<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vuejs-datepicker</h3>
    <a target="_blank" href="https://github.com/charliekassel/vuejs-datepicker" class="ui-block-description">https://github.com/charliekassel/vuejs-datepicker</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <datepicker v-model="date1" :bootstrapStyling="true" />

      <!-- Features -->

      <datepicker
        v-model="date1"
        :bootstrapStyling="true"
        :monday-first="true"
        :full-month-name="true"
        placeholder="Select arrival date"
        :calendar-button="true"
        calendar-button-icon="ion ion-md-calendar"
        :clear-button="true"
        :disabled-dates="disabledDates"
        :highlighted="highlightedDates" />

      <!-- Inline -->

      <datepicker v-model="date1" :bootstrapStyling="true" :inline="true" />

    </div>
  </div>
</template>

<style src="@/vendor/libs/vuejs-datepicker/vuejs-datepicker.scss" lang="scss"></style>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data: () => ({
    date1: moment().toDate(),
    disabledDates: {
      days: [0] // Disable sunday
    },
    highlightedDates: {
      dates: [
        moment().add(1, 'd').toDate(),
        moment().add(2, 'd').toDate(),
        moment().add(3, 'd').toDate()
      ]
    }
  })
}
</script>
