<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
      <div>Tickets</div>
      <b-btn variant="primary btn-round" class="d-block"><span class="ion ion-md-add"></span>&nbsp; Create ticket</b-btn>
    </h4>

    <!-- Filters -->
    <div class="ui-bordered px-4 pt-4 mb-4">
      <div class="form-row align-items-center">
        <div class="col-md mb-4">
          <label class="form-label">Priority</label>
          <b-select v-model="filterPriority" :options="['Any', 'High', 'Medium', 'Low']" />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Status</label>
          <b-select v-model="filterStatus" :options="['Any', 'Open', 'Reopened', 'In progress', 'Closed']" />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Created date</label>
          <flat-pickr v-model="filterCreatedDate" :config="{ altInput: true, animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y', mode: 'range' }" :placeholder="!isIEMode ? 'Any' : null" />
        </div>
        <div class="col-md col-xl-2 mb-4">
          <label class="form-label d-none d-md-block">&nbsp;</label>
          <b-btn variant="secondary" :block="true">Show</b-btn>
        </div>
      </div>
    </div>
    <!-- / Filters -->

    <b-card no-body>

      <!-- Table controls -->
      <b-card-body>

        <div class="row">
          <div class="col">
            Per page: &nbsp;
            <b-select size="sm" v-model="perPage" :options="[10, 20, 30, 40, 50]" class="d-inline-block w-auto" />
          </div>
          <div class="col">
            <b-input size="sm" placeholder="Search..." class="d-inline-block w-auto float-sm-right" @input="filter($event)" />
          </div>
        </div>

      </b-card-body>
      <!-- / Table controls -->

      <!-- Table -->
      <hr class="border-light m-0">
      <div class="table-responsive">

        <b-table
          :items="ticketsData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage"
          class="card-table">

          <template slot="priority" slot-scope="data">
            <b-dropdown :variant="priorityDropdownVariant(data.item.priority)" :right="isRTL">
              <template slot="button-content">
                <span v-if="data.item.priority === 1">High</span>
                <span v-if="data.item.priority === 2">Medium</span>
                <span v-if="data.item.priority === 3">Low</span>
              </template>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.priority === 1">High</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.priority === 2">Medium</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.priority === 3">Low</b-dropdown-item>
            </b-dropdown>
          </template>

          <template slot="status" slot-scope="data">
            <b-dropdown variant="outline-secondary btn-xs md-btn-flat" :right="isRTL">
              <template slot="button-content">
                <span v-if="data.item.status === 1">Open</span>
                <span v-if="data.item.status === 2">Reopened</span>
                <span v-if="data.item.status === 3">In progress</span>
                <span v-if="data.item.status === 4">Closed</span>
              </template>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.status === 1">Open</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.status === 2">Reopened</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.status === 3">In progress</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)" :active="data.item.status === 4">Closed</b-dropdown-item>
            </b-dropdown>
          </template>

          <template slot="actions" slot-scope="data">
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Edit"><i class="ion ion-md-create"></i></b-btn>
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Remove"><i class="ion ion-md-close"></i></b-btn>
          </template>
        </b-table>

      </div>

      <!-- Pagination -->
      <b-card-body class="pt-0 pb-3">

        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">Page {{ currentPage }} of {{ totalPages }}</span>
          </div>
          <div class="col-sm pt-3">
            <b-pagination class="justify-content-center justify-content-sm-end m-0"
              v-if="totalItems"
              v-model="currentPage"
              :total-rows="totalItems"
              :per-page="perPage"
              size="sm" />
          </div>
        </div>

      </b-card-body>
      <!-- / Pagination -->

    </b-card>
  </div>
</template>

<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>

<script>
import flatPickr from 'vue-flatpickr-component'

export default {
  name: 'pages-ticket-list',
  metaInfo: {
    title: 'Ticket list - Pages'
  },
  components: {
    flatPickr
  },
  data: () => ({
    // Options
    dataUrl: 'json/pages_tickets_list.json',
    searchKeys: ['id', 'subject'],
    sortBy: 'id',
    sortDesc: false,
    perPage: 10,

    fields: [
      { key: 'id', sortable: true, thClass: 'text-nowrap', tdClass: 'align-middle py-3' },
      { key: 'subject', sortable: true, thClass: 'text-nowrap', thStyle: 'min-width: 300px', tdClass: 'align-middle py-3' },
      { key: 'created_at', sortable: true, thClass: 'text-nowrap', tdClass: 'align-middle py-3' },
      { key: 'last_update', sortable: true, thClass: 'text-nowrap', tdClass: 'align-middle py-3' },
      { key: 'priority', sortable: true, thClass: 'text-nowrap', tdClass: 'align-middle py-3' },
      { key: 'status', sortable: true, thClass: 'text-nowrap', tdClass: 'align-middle py-3' },
      { key: 'actions', label: ' ', thClass: 'text-nowrap', tdClass: 'text-nowrap align-middle text-center py-3' }
    ],

    // Filters
    filterPriority: 'Any',
    filterStatus: 'Any',
    filterCreatedDate: null,

    ticketsData: [],
    originalTicketsData: [],

    currentPage: 1
  }),

  computed: {
    totalItems () {
      return this.ticketsData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },

  methods: {
    filter (value) {
      const val = value.toLowerCase()
      const filtered = this.originalTicketsData.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })
      this.ticketsData = filtered
    },

    priorityDropdownVariant (priority) {
      let variant

      if (priority === 1) variant = 'danger'
      if (priority === 2) variant = 'success'
      if (priority === 3) variant = 'warning'

      return `${variant} btn-xs md-btn-flat`
    }
  },

  created () {
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}${this.dataUrl}`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.ticketsData = data
      this.originalTicketsData = data.slice(0)
    }

    req.send()
  }
}
</script>
