<template>
  <div>
    <div class="media align-items-center py-3 mb-4">
      <img :src="`${baseUrl}img/uikit/${productImage}`" alt="" class="d-block ui-w-80 ui-bordered">
      <div class="media-body ml-4">
        <h4 class="font-weight-bold mb-2">{{productData.title}} <span class="text-muted">#{{productData.id}}</span></h4>
        <b-btn variant="primary" size="sm">Edit</b-btn>&nbsp;
        <b-btn variant="default" size="sm">Show item page</b-btn>
      </div>
    </div>

    <b-tabs class="nav-tabs-top nav-responsive-sm">
      <b-tab title="Overview" active>

        <div class="row no-gutters row-bordered">
          <div class="d-flex col-md-6 col-lg align-items-center">
            <b-card-body class="d-flex align-items-center">

              <div>
                <div class="ui-stars text-large text-nowrap">
                  <div class="ui-star" v-for="i in [1, 2, 3, 4, 5]" :class="uiStarClass(i)" :key="i">
                    <i class="ion ion-md-star"></i>
                    <i class="ion ion-md-star"></i>
                  </div>
                </div>
                <a href="javascript:void(0)" class="d-block text-muted small">{{productData.reviews}} reviews</a>
              </div>

            </b-card-body>
          </div>
          <div class="d-flex col-md-6 col-lg align-items-center">
            <b-card-body class="d-flex align-items-center">

              <div class="lnr lnr-cart display-4 text-secondary"></div>
              <div class="ml-3">
                <div class="text-muted small line-height-1">Sales</div>
                <div class="text-xlarge">{{formatInt(productData.sales)}}</div>
              </div>

            </b-card-body>
          </div>
          <div class="d-flex col-md-6 col-lg align-items-center">
            <b-card-body class="d-flex align-items-center">

              <div class="lnr lnr-earth display-4 text-secondary"></div>
              <div class="ml-3">
                <div class="text-muted small line-height-1">Views</div>
                <div class="text-xlarge">{{formatInt(productData.views)}}</div>
              </div>

            </b-card-body>
          </div>
          <div class="d-flex col-md-6 col-lg align-items-center">
            <b-card-body class="d-flex align-items-center">

              <div class="lnr lnr-gift display-4 text-secondary"></div>
              <div class="ml-3">
                <div class="text-muted small line-height-1">Wished</div>
                <div class="text-xlarge">{{formatInt(productData.wished)}}</div>
              </div>

            </b-card-body>
          </div>
        </div>
        <hr class="m-0">

        <b-card-body>

          <h6 class="small font-weight-semibold mb-4">Basic info</h6>

          <table class="table product-item-table">
            <tbody>
              <tr>
                <td>Price:</td>
                <td><strong>{{formatPrice(productData.price)}}</strong></td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>{{productData.category}}</td>
              </tr>
              <tr>
                <td>Items in stock:</td>
                <td>{{productData.in_stock}}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>{{productData.tax}}%</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>
                  <b-badge variant="success" v-if="productData.status === 1">Published</b-badge>
                  <b-badge variant="danger" v-if="productData.status === 2">Out of stock</b-badge>
                  <b-badge variant="info" v-if="productData.status === 3">Pending</b-badge>
                </td>
              </tr>
            </tbody>
          </table>

        </b-card-body>
        <hr class="m-0">

        <b-card-body>

          <h6 class="small font-weight-semibold mb-4">Options</h6>

          <table class="table product-item-table">
            <tbody>
              <tr>
                <td>Brand:</td>
                <td>{{productData.options.brand}}</td>
              </tr>
              <tr>
                <td>Storages:</td>
                <td>{{productData.options.storages.join(', ')}}</td>
              </tr>
              <tr>
                <td>Colors:</td>
                <td>
                  <span v-for="color in productData.options.colors" :key="color[0]">
                    <span class="ui-product-color align-middle" :style="{background: color[1]}"></span> <span class="align-middle">{{color[0]}}</span> &nbsp;
                  </span>
                </td>
              </tr>
              <tr>
                <td>Warranties:</td>
                <td>{{productData.options.warranties.join(', ')}}</td>
              </tr>
              <tr>
                <td>Ships from:</td>
                <td>{{productData.options.ships_from.join(', ')}}</td>
              </tr>
            </tbody>
          </table>

        </b-card-body>
        <hr class="m-0">

        <b-card-body class="product-item-table">

          <h6 class="small font-weight-semibold mb-4">Meta</h6>

          <table class="table">
            <tbody>
              <tr>
                <td>Title:</td>
                <td>{{productData.meta.title}}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{{productData.meta.description}}</td>
              </tr>
              <tr>
                <td>Keywords:</td>
                <td>{{productData.meta.keywords}}</td>
              </tr>
            </tbody>
          </table>

        </b-card-body>
      </b-tab>
      <b-tab title="Description">

        <b-card-body class="p-5" v-html="productData.description"></b-card-body>

      </b-tab>
      <b-tab title="Discounts">
        <b-card-body>

          <div class="table-responsive">
            <b-table :items="productData.discounts" class="product-item-discounts-table">
              <template slot="discount" slot-scope="data">
                {{data.item.discount}}%
              </template>
            </b-table>
          </div>

        </b-card-body>
      </b-tab>
      <b-tab title="Images">
        <b-card-body>

          <div class="mb-4">
            <b-badge variant="primary badge-dot" /> Primary image
          </div>

          <div class="row">

            <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-4" v-for="i in productData.images" :key="i.image">
              <a :href="`${baseUrl}img/uikit/${i.image}`" :class="{'border-primary': i.primary}" target="_blank" class="d-block ui-bordered">
                <img :src="`${baseUrl}img/uikit/${i.image}`" class="img-fluid" alt="">
              </a>
            </div>

          </div>

        </b-card-body>
      </b-tab>
    </b-tabs>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/products.scss" lang="scss"></style>

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-e-commerce-product-item',
  metaInfo: {
    title: 'Product item - Pages'
  },
  data: () => ({
    productData: {
      id: 3455632,
      title: 'Samsung Galaxy S7 Edge',
      price: 1049,
      category: 'Mobile phones',
      in_stock: 123,
      tax: 25,
      status: 1,

      // Statistics
      rating: 4.3,
      reviews: 123,
      sales: 1045,
      views: 65326,
      wished: 3671,

      // Options
      options: {
        brand: 'Samsung',
        storages: ['32GB', '64GB'],
        colors: [['Black', '#000'], ['Green', '#5f9ea0'], ['Gold', '#c5baab']],
        warranties: ['Standard - 1 year', 'Extended - 2 years | $99'],
        ships_from: ['USA', 'China', 'Germany']
      },

      // Meta
      meta: {
        title: 'Samsung Galaxy S7 Edge',
        description: 'Buy Samsung Galaxy S7 Edge!',
        keywords: 'Mobile, Smartphone, Samsung, Galaxy, S3, Edge'
      },

      // Images
      images: [
        { image: 's7edge-1.jpg', primary: true },
        { image: 's7edge-2.jpg' },
        { image: 's7edge-3.jpg' },
        { image: 's7edge-4.jpg' }
      ],

      // Discounts
      discounts: [
        { discount: '5', type: 'General', code: '-', quantity: '100', done: '65', start_date: '-', end_date: '-' },
        { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', start_date: '02/01/2018', end_date: '03/01/2018' },
        { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', done: '-', start_date: '02/12/2018', end_date: '03/05/2018' },
        { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', done: '-', start_date: '02/23/2018', end_date: '04/06/2018' },
        { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', start_date: '05/14/2018', end_date: '05/30/2018' }
      ],

      // Description
      description: `
<div class="row">
  <div class="col-md">
    <p>
      <span class="text-muted">Dimension:</span>&nbsp; 150.9 x 72.6 x 7.7mm</p>
    <p>
      <span class="text-muted">Weight:</span>&nbsp; 157g</p>
    <p>
      <span class="text-muted">Camera Resolution (Rear):</span>&nbsp; Dual Pixel 12.0 MP</p>
    <p>
      <span class="text-muted">Camera Resolution (Front):</span>&nbsp; CMOS 5MP</p>
    <p>
      <span class="text-muted">Battery, Talk Time:</span>&nbsp; 3G CDMA: Up to 36 hours</p>
    <p>
      <span class="text-muted">Battery Type and Size:</span>&nbsp; 3600 mAh</p>
    <p>
      <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
    <p>
      <span class="text-muted">Video Play Time:</span>&nbsp; Up to 19 hours</p>
    <p>
      <span class="text-muted">Internet Use Time:</span>&nbsp; 3G: Up to 13 hours; LTE: Up to 15 hours; Wi-Fi: Up to 15 hours</p>
    <p>
      <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
  </div>
  <div class="col-md">
    <p>
      <span class="text-muted">Internal Memory:</span>&nbsp; 32GB</p>
    <p>
      <span class="text-muted">External Memory:</span>&nbsp; MicroSD (Up to 256GB)</p>
    <p>
      <span class="text-muted">Wi-Fi:</span>&nbsp; 802.11 a/b/g/n/ac 2.4G+5GHz, VHT80 MU-MIMO</p>
    <p>
      <span class="text-muted">USB:</span>&nbsp; USB 2.0</p>
    <p>
      <span class="text-muted">Bluetooth:</span>&nbsp; Bluetooth v4.2</p>
    <p>
      <span class="text-muted">ANT+:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">Location Technology:</span>&nbsp; GPS, Glonass</p>
    <p>
      <span class="text-muted">Wi-Fi Direct:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">NFC:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">Processor Speed, Type:</span>&nbsp; 2.15GHz, 1.6GHz, Quad-Core</p>
  </div>
  <div class="col-md">
    <p>
      <span class="text-muted">Main Display Resolution:</span>&nbsp; 2560 x 1440 (Quad HD)</p>
    <p>
      <span class="text-muted">Main Display Size:</span>&nbsp; 5.5” (139.5mm)</p>
    <p>
      <span class="text-muted">Main Display Technology:</span>&nbsp; Dual edge Super AMOLED®</p>
    <p>
      <span class="text-muted">Color Depth:</span>&nbsp; 16M</p>
    <p>
      <span class="text-muted">Audio Playing Format:</span>&nbsp; MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA</p>
    <p>
      <span class="text-muted">Video Playing Format:</span>&nbsp; MP4, M4V, 3GP, 3G2, WMV, ASF, AVI, FLV, MKV, WEBM</p>
    <p>
      <span class="text-muted">Video Playing Resolution:</span>&nbsp; UHD 4K (3840 x 2160) @60fps</p>
    <p>
      <span class="text-muted">S-Voice:</span>&nbsp; Yes</p>
  </div>
</div>`
    }
  }),
  computed: {
    productImage () {
      return this.productData.images.find(i => !!i.primary).image
    }
  },
  methods: {
    uiStarClass (i) {
      if (this.productData.rating > (i - 1) && this.productData.rating < i) return 'half-filled'
      if (this.productData.rating >= i) return 'filled'
      return ''
    },
    formatInt (v) {
      return numeral(v).format('0,0')
    },
    formatPrice (p) {
      return numeral(p).format('$0,0.00')
    }
  }
}
</script>
