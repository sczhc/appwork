<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
      <div>Products</div>
      <b-btn variant="primary btn-round" class="d-block"><span class="ion ion-md-add"></span>&nbsp; Add product</b-btn>
    </h4>

    <!-- Filters -->
    <div class="ui-bordered px-4 pt-4 mb-4">
      <div class="form-row">

        <div class="col-md mb-4">
          <label class="form-label pb-1">Sales <span class="text-muted font-weight-normal ml-2">{{filterSales[0]}} - {{filterSales[1]}}</span></label>
          <nouislider v-model="filterSales" :options="filterSalesOptions" class="product-list-slider my-3 mx-2"></nouislider>
        </div>

        <div class="col-md mb-4">
          <label class="form-label pb-1">Price <span class="text-muted font-weight-normal ml-2">{{formatPrice(filterPrice[0])}} - {{formatPrice(filterPrice[1])}}</span></label>
          <nouislider v-model="filterPrice" :options="filterPriceOptions" class="product-list-slider my-3 mx-2"></nouislider>
        </div>

        <div class="col-md mb-4">
          <label class="form-label">Status</label>
          <b-form-select v-model="filterStatus" :options="['Any', 'Published', 'Out of stock', 'Pending', 'Hidden']" />
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
          :items="productsData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage"
          class="products-table card-table">

          <template slot="title" slot-scope="data">
            <div class="media align-items-center">
              <img class="d-block ui-w-40" :src="`${baseUrl}img/uikit/${data.item.image}`" alt="">
              <!-- Generate link to product here -->
              <a href="javascript:void(0)" class="media-body d-block text-dark ml-3">{{data.item.title}}</a>
            </div>
          </template>

          <template slot="status" slot-scope="data">
            <b-badge variant="outline-success" v-if="data.item.status === 1">Published</b-badge>
            <b-badge variant="outline-danger" v-if="data.item.status === 2">Out of stock</b-badge>
            <b-badge variant="outline-info" v-if="data.item.status === 3">Pending</b-badge>
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

<!-- Page -->
<style src="@/vendor/styles/pages/products.scss" lang="scss"></style>

<script>
import * as numeral from 'numeral'
import Nouislider from '@/vendor/libs/nouislider/Nouislider'

export default {
  name: 'pages-e-commerce-product-list',
  metaInfo: {
    title: 'Product list - Pages'
  },

  components: {
    Nouislider
  },

  data: () => ({
    // Options
    dataUrl: 'json/pages_e-commerce_product-list.json',
    searchKeys: ['title', 'id', 'price'],
    sortBy: 'id',
    sortDesc: true,
    perPage: 10,

    fields: [
      { key: 'title', label: 'Product', sortable: true, tdClass: 'py-2 align-middle', thStyle: 'min-width: 300px' },
      { key: 'id', sortable: true, tdClass: 'py-2 align-middle' },
      { key: 'in_stock', sortable: true, tdClass: 'py-2 align-middle' },
      { key: 'price', sortable: true, tdClass: 'py-2 align-middle', formatter: value => numeral(value).format('$0,0.00') },
      { key: 'sales', sortable: true, tdClass: 'py-2 align-middle' },
      { key: 'views', sortable: true, tdClass: 'py-2 align-middle', formatter: value => numeral(value).format('0,0') },
      { key: 'status', sortable: true, tdClass: 'py-2 align-middle' },
      { key: 'actions', label: ' ', tdClass: 'py-2 align-middle text-nowrap' }
    ],

    // Filters
    filterSales: [10, 834],
    filterPrice: [10, 2000],
    filterStatus: 'Any',

    // Filter options
    filterSalesOptions: {
      step: 10,
      connect: true,
      tooltips: true,
      range: {
        'min': [ 10 ],
        'max': [ 834 ]
      },
      format: {
        to: function (value) {
          return Math.round(value)
        },
        from: function (value) {
          return value
        }
      }
    },
    filterPriceOptions: {
      step: 50,
      connect: true,
      tooltips: true,
      range: {
        'min': [ 10 ],
        'max': [ 2000 ]
      },
      format: {
        to: function (value) {
          return numeral(value).format('$0,0')
        },
        from: function (value) {
          return value.replace(/[$,]/g, '')
        }
      }
    },

    productsData: [],
    originalProductsData: [],

    currentPage: 1
  }),

  computed: {
    totalItems () {
      return this.productsData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },

  methods: {
    filter (value) {
      const val = value.toLowerCase()
      const filtered = this.originalProductsData.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })
      this.productsData = filtered
    },

    formatPrice (price) {
      return numeral(parseInt(String(price).replace(/[$,]/g, ''))).format('$0,0')
    }
  },

  created () {
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}${this.dataUrl}`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.productsData = data
      this.originalProductsData = data.slice(0)
    }

    req.send()
  },

  mounted () {
    // Handle RTL direction
    if (this.isRTL) {
      this.filterSalesOptions = Object.assign({}, this.filterSalesOptions, { direction: 'rtl' })
      this.filterPriceOptions = Object.assign({}, this.filterPriceOptions, { direction: 'rtl' })
    }
  }
}
</script>
