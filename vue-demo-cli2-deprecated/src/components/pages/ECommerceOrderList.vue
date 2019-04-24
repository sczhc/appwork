<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Orders
    </h4>

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
          :items="ordersData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage"
          class="orders-table card-table">

          <template slot="status" slot-scope="data">
            <b-badge variant="outline-success" v-if="data.item.status === 1">Shipped</b-badge>
            <b-badge variant="outline-warning" v-if="data.item.status === 2">Pending</b-badge>
            <b-badge variant="outline-info" v-if="data.item.status === 3">Sent</b-badge>
            <b-badge variant="outline-danger" v-if="data.item.status === 4">Cancelled</b-badge>
          </template>

          <template slot="actions" slot-scope="data">
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Show"><i class="ion ion-md-eye"></i></b-btn>
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Edit"><i class="ion ion-md-create"></i></b-btn>
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

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-e-commerce-order-list',
  metaInfo: {
    title: 'Order list - Pages'
  },

  data: () => ({
    // Options
    dataUrl: 'json/pages_e-commerce_order-list.json',
    searchKeys: ['id', 'customer', 'amount'],
    sortBy: 'id',
    sortDesc: true,
    perPage: 10,

    fields: [
      { key: 'id', sortable: true, tdClass: 'align-middle' },
      { key: 'customer', sortable: true, tdClass: 'align-middle' },
      { key: 'amount', sortable: true, formatter: value => numeral(value).format('$0,0.00'), tdClass: 'align-middle' },
      { key: 'date', sortable: true, tdClass: 'align-middle' },
      { key: 'status', sortable: true, tdClass: 'align-middle' },
      { key: 'actions', label: ' ', tdClass: 'text-nowrap align-middle' }
    ],

    ordersData: [],
    originalOrdersData: [],

    currentPage: 1
  }),

  computed: {
    totalItems () {
      return this.ordersData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },

  methods: {
    filter (value) {
      const val = value.toLowerCase()
      const filtered = this.originalOrdersData.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })
      this.ordersData = filtered
    }
  },

  created () {
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}${this.dataUrl}`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.ordersData = data
      this.originalOrdersData = data.slice(0)
    }

    req.send()
  }
}
</script>
