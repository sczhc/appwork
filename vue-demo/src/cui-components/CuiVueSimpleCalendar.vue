<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-simple-calendar</h3>
    <a target="_blank" href="https://github.com/richardtallent/vue-simple-calendar" class="ui-block-description">https://github.com/richardtallent/vue-simple-calendar</a>

  <div class="no-ie10" data-name="vue-simple-calendar"></div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <!-- New event modal -->
      <b-modal title="Title" ref="newEventModal" @shown="$refs.newEventTitleInput.focus()" @ok.prevent="addEvent()" @hidden="clearModal()">
        <form @submit.stop.prevent="addEvent()">
          <b-form-group label="Title">
            <b-input v-model="newEventTitle" ref="newEventTitleInput" />
          </b-form-group>
          <b-form-group label="Type">
            <b-form-select v-model="newEventType" :options="[
              { value: '', text: 'Default' },
              { value: 'cv-event-secondary', text: 'Secondary' },
              { value: 'cv-event-success', text: 'Success' },
              { value: 'cv-event-info', text: 'Info' },
              { value: 'cv-event-warning', text: 'Warning' },
              { value: 'cv-event-danger', text: 'Danger' },
              { value: 'cv-event-dark', text: 'Dark' }
            ]" />
          </b-form-group>
        </form>
      </b-modal>
      <!-- / New event modal -->

      <div class="d-flex">
        <calendar-view class="holiday-us-traditional holiday-us-official" style="min-height: 800px;"
          :events="events"
          :show-date="showDate"
          :time-format-options="{hour: 'numeric', minute:'2-digit'}"
          :display-period-uom="displayPeriodUom"
          :enable-drag-drop="true"
          :show-event-times="true"
          :display-period-count="1"
          :starting-day-of-week="1"
          locale="en-US"
          event-content-height="1.25rem"
          @drop-on-date="onDrop"
          @click-date="onClickDay"
          @click-event="onClickEvent"
          @show-date-change="setShowDate">

          <div slot="header" slot-scope="{ headerProps }" class="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center mb-4">
            <div class="text-large font-weight-light">
              {{ getPeriodLabel(headerProps) }}
            </div>
            <div class="w-100 w-md-auto text-center mt-3 mt-md-0">
              <b-btn-group>
                <b-btn variant="primary" size="sm" :pressed="displayPeriodUom === 'year'" @click="displayPeriodUom = 'year'">Year</b-btn>
                <b-btn variant="primary" size="sm" :pressed="displayPeriodUom === 'month'" @click="displayPeriodUom = 'month'">Month</b-btn>
                <b-btn variant="primary" size="sm" :pressed="displayPeriodUom === 'week'" @click="displayPeriodUom = 'week'">Week</b-btn>
              </b-btn-group>
            </div>
            <div class="w-100 w-md-auto text-center mt-2 mt-md-0">
              <b-btn-toolbar class="d-inline-block">
                <b-btn variant="primary" size="sm" @click="setShowDate(headerProps.currentPeriod)">Today</b-btn>
                <b-btn-group class="ml-1">
                  <b-btn variant="primary icon-btn" size="sm" :disabled="!headerProps.previousYear" @click="setShowDate(headerProps.previousYear)"><i class="ion ion-md-arrow-back scaleX--1-rtl"></i></b-btn>
                  <b-btn variant="primary icon-btn" size="sm" :disabled="!headerProps.previousPeriod" @click="setShowDate(headerProps.previousPeriod)"><i class="ion ion-ios-arrow-back scaleX--1-rtl"></i></b-btn>
                  <b-btn variant="primary icon-btn" size="sm" :disabled="!headerProps.nextPeriod" @click="setShowDate(headerProps.nextPeriod)"><i class="ion ion-ios-arrow-forward scaleX--1-rtl"></i></b-btn>
                  <b-btn variant="primary icon-btn" size="sm" :disabled="!headerProps.nextYear" @click="setShowDate(headerProps.nextYear)"><i class="ion ion-md-arrow-forward scaleX--1-rtl"></i></b-btn>
                </b-btn-group>
              </b-btn-toolbar>
            </div>
          </div>

        </calendar-view>
      </div>
    </div>
  </div>
</template>

<style>
  /* Set minimum width */
  .cv-wrapper {
    width: 100%;
    overflow-x: auto;
  }
  .cv-wrapper > * {
    min-width: 600px !important;
  }
</style>

<style src="@/vendor/libs/vue-simple-calendar/vue-simple-calendar.scss" lang="scss"></style>
<style src="vue-simple-calendar/static/css/holidays-us.css" lang="css"></style>

<script>
import { CalendarView, CalendarMathMixin } from 'vue-simple-calendar'

const calendarUtils = CalendarMathMixin.methods

export default {
  components: {
    CalendarView
  },
  data: () => ({
    lastEventId: 0,
    showDate: new Date(),
    displayPeriodUom: 'month',

    newEventDate: null,
    newEventTitle: '',
    newEventType: '',

    events: []
  }),
  mounted () {
    this.events = [{
      id: 'e0',
      startDate: '2018-01-05'
    }, {
      id: 'e1',
      startDate: this.thisMonth(15, 18, 30)
    }, {
      id: 'e2',
      startDate: this.thisMonth(15),
      title: 'Single-day event with a long title'
    }, {
      id: 'e3',
      startDate: this.thisMonth(7, 9, 25),
      endDate: this.thisMonth(10, 16, 30),
      class: 'cv-event-info',
      title: 'Multi-day event with a long title and times'
    }, {
      id: 'e4',
      startDate: this.thisMonth(20),
      title: 'My Birthday!',
      classes: 'cv-event-danger',
      url: 'https://en.wikipedia.org/wiki/Birthday'
    }, {
      id: 'e5',
      startDate: this.thisMonth(5),
      endDate: this.thisMonth(12),
      title: 'Multi-day event',
      classes: 'cv-event-success'
    }, {
      id: 'foo',
      startDate: this.thisMonth(29),
      title: 'Same day 1'
    }, {
      id: 'e6',
      startDate: this.thisMonth(29),
      title: 'Same day 2',
      classes: 'cv-event-warning'
    }, {
      id: 'e7',
      startDate: this.thisMonth(29),
      title: 'Same day 3'
    }, {
      id: 'e8',
      startDate: this.thisMonth(29),
      title: 'Same day 4',
      classes: 'cv-event-secondary'
    }, {
      id: 'e9',
      startDate: this.thisMonth(29),
      title: 'Same day 5'
    }, {
      id: 'e10',
      startDate: this.thisMonth(29),
      title: 'Same day 6',
      classes: 'cv-event-dark'
    }, {
      id: 'e11',
      startDate: this.thisMonth(29),
      title: 'Same day 7'
    }]
  },
  methods: {
    thisMonth (d, h = 0, m = 0) {
      const t = new Date()
      return new Date(t.getFullYear(), t.getMonth(), d, h, m)
    },
    setShowDate (d) {
      this.showDate = d
    },
    getPeriodLabel (data) {
      return calendarUtils.formattedPeriod(
        data.periodStart,
        data.periodEnd,
        this.displayPeriodUom,
        data.monthNames
      )
    },

    onClickDay (d) {
      this.newEventDate = d
      this.$refs.newEventModal.show()
    },
    addEvent () {
      if (this.newEventDate && this.newEventTitle) {
        this.events.push({
          id: `ne${this.lastEventId++}`,
          startDate: this.newEventDate,
          title: this.newEventTitle,
          classes: this.newEventType
        })
      }
      this.$refs.newEventModal.hide()
    },
    clearModal () {
      this.newEventDate = null
      this.newEventTitle = ''
      this.newEventType = ''
    },

    onClickEvent (e) {
      alert(`You clicked: ${e.title}`)
    },
    onDrop (event, date) {
      const eLength = calendarUtils.dayDiff(event.startDate, date)
      event.originalEvent.startDate = calendarUtils.addDays(event.startDate, eLength)
      event.originalEvent.endDate = calendarUtils.addDays(event.endDate, eLength)
    }
  }
}
</script>
