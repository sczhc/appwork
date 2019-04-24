<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Order <span class="text-muted">#{{orderData.id}}</span>
    </h4>

    <b-card no-body>

      <!-- Status -->
      <b-card-body>
        <strong class="mr-2">Status:</strong>
        <span class="text-big">
          <b-badge variant="success" v-if="orderData.status === 1">Shipped</b-badge>
          <b-badge variant="warning" v-if="orderData.status === 2">Pending</b-badge>
          <b-badge variant="info" v-if="orderData.status === 3">Sent</b-badge>
          <b-badge variant="danger" v-if="orderData.status === 4">Cancelled</b-badge>
        </span>
        <span class="text-muted small ml-1">{{orderData.lastUpdate}}</span>
      </b-card-body>
      <hr class="m-0">
      <!-- / Status -->

      <!-- Info -->
      <b-card-body class="pb-1">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="text-muted small">Date</div>
            {{orderData.date}}
          </div>
          <div class="col-md-4 mb-3">
            <div class="text-muted small">Items</div>
            {{orderItems}}
          </div>
          <div class="col-md-4 mb-3">
            <div class="text-muted small">Amount</div>
            {{orderAmount}}
          </div>
        </div>
      </b-card-body>
      <hr class="m-0">
      <!-- / Info -->

      <!-- Billing -->
      <b-card-body>
        <h6 class="small font-weight-semibold">
          Billing Info
        </h6>
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="text-muted small">Name</div>
            {{orderData.billing.name}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Phone</div>
            {{orderData.billing.phone}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Email</div>
            {{orderData.billing.email}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Country</div>
            {{orderData.billing.country}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">State / Region</div>
            {{orderData.billing.state}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">City</div>
            {{orderData.billing.city}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">ZIP Code</div>
            {{orderData.billing.zip_code}}
          </div>
          <div class="col-12">
            <div class="text-muted small">Address</div>
            {{orderData.billing.address}}
          </div>
        </div>
      </b-card-body>
      <hr class="m-0">
      <!-- / Billing -->

      <!-- Shipping -->
      <b-card-body>
        <h6 class="small font-weight-semibold">
          Shipping Info
        </h6>
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="text-muted small">Name</div>
            {{orderData.shipping.name}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Phone</div>
            {{orderData.shipping.phone}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Email</div>
            {{orderData.shipping.email}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">Country</div>
            {{orderData.shipping.country}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">State / Region</div>
            {{orderData.shipping.state}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">City</div>
            {{orderData.shipping.city}}
          </div>
          <div class="col-md-3 mb-3">
            <div class="text-muted small">ZIP Code</div>
            {{orderData.shipping.zip_code}}
          </div>
          <div class="col-12">
            <div class="text-muted small">Address</div>
            {{orderData.shipping.address}}
          </div>
        </div>
      </b-card-body>
      <hr class="m-0">
      <!-- / Shipping -->

      <!-- Items -->
      <b-card-body>
        <h6 class="small font-weight-semibold">
          Items
        </h6>

        <div class="table-responsive">

          <b-table
            :items="orderData.items"
            :fields="[
              {key: 'item', tdClass: 'p-4'},
              {key: 'quantity', tdClass: 'quantity-col p-4 align-middle'},
              {key: 'price', tdClass: 'amount-col p-4 text-right align-middle font-weight-semibold'}
            ]"
            :bordered="true"
            thead-class="d-none"
            class="order-items-table m-0">

            <template slot="item" slot-scope="data">
              <div class="media align-items-center">
                <img :src="`${baseUrl}img/uikit/${data.item.image}`" class="d-block ui-w-40 ui-bordered mr-4" alt>
                <div class="media-body">
                  <a href="javascript:void(0)" class="d-block text-dark">{{data.item.title}} <span class="text-muted">#{{data.item.id}}</span></a>
                  <small>
                    <span v-for="(value, key) in data.item.options" :key="key + value">
                      <span class="text-muted">{{ formatOptionLabel(key) }}:</span>
                      <span v-if="key === 'color'"><span class="ui-product-color ui-product-color-sm align-text-bottom" :style="{background: value}"></span></span>
                      <span v-else>{{value}}</span>
                      &nbsp;
                    </span>
                  </small>
                </div>
              </div>
            </template>

            <template slot="quantity" slot-scope="data">x{{data.item.quantity}}</template>
            <template slot="price" slot-scope="data">{{formatPrice(data.item.price)}}</template>

          </b-table>

        </div>
      </b-card-body>
      <!-- / Items -->

    </b-card>
  </div>
</template>

<style lang="scss">
  .order-items-table {
    min-width: 550px;

    .quantity-col {
      width: 66px;
    }
    .amount-col {
      width: 100px;
    }
  }
</style>

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-e-commerce-order-detail',
  metaInfo: {
    title: 'Order detail - Pages'
  },

  data: () => ({
    orderData: {
      id: 3455632,
      status: 1,
      lastUpdate: '02/25/2018',
      date: '02/17/2018 16:23',

      billing: {
        name: 'John Doe',
        phone: '123-456-7891',
        email: 'jdoe@email.com',
        country: 'USA',
        state: 'California',
        city: 'San Francisco',
        zip_code: '94108',
        address: '950 Mason St, San Francisco, CA 94108, USA'
      },

      shipping: {
        name: 'John Doe',
        phone: '123-456-7891',
        email: 'jdoe@email.com',
        country: 'USA',
        state: 'California',
        city: 'San Francisco',
        zip_code: '94108',
        address: '950 Mason St, San Francisco, CA 94108, USA'
      },

      items: [{
        image: 'nike-1.jpg',
        title: 'Nike Men Black Liteforce III Sneakers',
        id: 3455632,
        price: 115.10,
        quantity: 2,
        options: {
          color: '#e81e2c',
          size: 'EU 37',
          ships_from: 'China'
        }
      }, {
        image: 's7edge-1.jpg',
        title: 'Samsung Galaxy S7 Edge',
        id: 3455644,
        price: 1049.00,
        quantity: 1,
        options: {
          color: '#000',
          storage: '32GB',
          warranty: 'Standard - 1 year',
          ships_from: 'China'
        }
      }, {
        image: 'sunglasses.jpg',
        title: 'WALKING 400 BLUE CAT3',
        id: 3455601,
        price: 20.55,
        quantity: 1,
        options: {
          ships_from: 'Germany'
        }
      }]
    }
  }),

  methods: {
    formatPrice (p) {
      return numeral(p).format('$0,0.00')
    },
    formatOptionLabel (v) {
      return v.replace(/_/g, ' ').replace(/^(.)/, (m, $1) => $1.toUpperCase())
    }
  },

  computed: {
    orderItems () {
      return this.orderData.items.reduce((cnt, i) => cnt + i.quantity, 0)
    },
    orderAmount () {
      return this.formatPrice(
        this.orderData.items.reduce((cnt, i) => cnt + i.price, 0)
      )
    }
  }
}
</script>
