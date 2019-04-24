<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Edit product <span class="text-muted">#{{productData.id}}</span>
    </h4>

    <b-tabs class="nav-tabs-top nav-responsive-sm">
      <b-tab title="Basic info" active>
        <b-card-body>

          <b-form-group label="Title">
            <b-input v-model="productData.title" />
          </b-form-group>

          <b-form-group label="Price">
            <b-input-group prepend="$">
              <b-input v-model="productData.price" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Items in stock">
            <b-input v-model="productData.in_stock" />
          </b-form-group>

          <b-form-group label="Tax">
            <b-input-group append="%">
              <b-input v-model="productData.tax" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Status">
            <b-select v-model="productData.status" :options="{ 1: 'Published', 2: 'Out of stock', 3: 'Pending', 4: 'Hidden' }" />
          </b-form-group>

          <b-form-group label="Category">
            <b-select v-model="productData.category" :options="['Computers', 'Portable tech', 'Mobile phones', 'Audio', 'Photo and video', 'Video game consoles']" />
          </b-form-group>

        </b-card-body>
        <hr class="m-0">
        <b-card-body>

          <h6 class="small font-weight-semibold mb-4">Options <span class="text-muted font-weight-normal">(depending on category)</span></h6>

          <b-form-group label="Brand">
            <b-select v-model="productData.options.brand" :options="['Apple', 'Blueberry', 'Samsung', 'LG', 'Asus', 'Sony', 'Honor', 'Huawei', 'Xiaomi']" />
          </b-form-group>

          <b-form-group label="Storages">
            <multiselect v-model="productData.options.storages" :multiple="true" :options="['8GB', '16GB', '32GB', '64GB', '128GB']" />
          </b-form-group>

          <b-form-group label="Colors">
            <multiselect v-model="productData.options.colors" :multiple="true" :trackBy="'1'" :options="[['Black', '#000'], ['White', '#fff'], ['Silver', 'silver'], ['Gray', 'gray'], ['Green', '#5f9ea0'], ['Gold', '#c5baab'], ['Pink', 'pink'], ['Red', 'red']]">
              <template slot="option" slot-scope="props">
                <span class="ui-product-color align-middle" :style="{background: props.option[1]}"></span>
                <span class="align-middle">{{props.option[0]}}</span>
              </template>
              <template slot="tag" slot-scope="props">
                <span class="multiselect__tag">
                  <span class="badge badge-dot" :style="{background: props.option[1]}"></span>&nbsp; {{props.option[0]}}
                  <i class="multiselect__tag-icon" @click="props.remove(props.option)"></i>
                </span>
              </template>
            </multiselect>
          </b-form-group>

          <b-form-group label="Warranties">
            <multiselect v-model="productData.options.warranties" :multiple="true" :options="['Standard - 1 year', 'Extended - 2 years | $99']" />
          </b-form-group>

          <b-form-group label="Ships from">
            <multiselect v-model="productData.options.ships_from" :multiple="true" :options="['USA', 'China', 'France', 'Germany', 'UK']" />
          </b-form-group>

        </b-card-body>
        <hr class="m-0">
        <b-card-body>

          <h6 class="small font-weight-semibold mb-4">Meta</h6>

          <b-form-group label="Title">
            <b-input v-model="productData.meta.title" />
          </b-form-group>

          <b-form-group label="Description">
            <b-textarea v-model="productData.meta.description" :rows="3" />
          </b-form-group>

          <b-form-group label="Keywords">
            <b-input v-model="productData.meta.keywords" />
          </b-form-group>

        </b-card-body>
      </b-tab>
      <b-tab title="Description">
        <b-card-body>

          <quill-editor v-model="productData.description" :options="editorOptions" v-if="!isIE10Mode" />
          <!-- Fallback -->
          <b-textarea v-model="productData.description" style="height: 600px" v-if="isIE10Mode" />

        </b-card-body>
      </b-tab>
      <b-tab title="Discounts">
        <b-card-body>

          <div class="table-responsive">
            <b-table :items="productData.discounts" :fields="['type','code','quantity','start_date','end_date',{ key: 'actions', label: ' ' }]" class="product-item-discounts-table">
              <template slot="discount" slot-scope="data">
                <b-input-group>
                  <b-input v-model="data.item.discount" />
                </b-input-group>
              </template>
              <template slot="type" slot-scope="data">
                <b-select v-model="data.item.type" :options="['General', 'Code']" />
              </template>
              <template slot="code" slot-scope="data">
                <b-input v-model="data.item.code" :disabled="data.item.type !== 'Code'" />
              </template>
              <template slot="quantity" slot-scope="data">
                <b-input v-model="data.item.quantity" />
              </template>
              <template slot="start_date" slot-scope="data">
                <flat-pickr v-model="data.item.start_date" :config="{ altInput: true, animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y' }" :placeholder="!isIEMode ? 'Select a start date' : null" />
              </template>
              <template slot="end_date" slot-scope="data">
                <flat-pickr v-model="data.item.end_date" :config="{ altInput: true, animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y', minDate: data.item.start_date }" :placeholder="!isIEMode ? 'Select an end date' : null" />
              </template>
              <template slot="actions" slot-scope="data">
                <b-btn @click="productData.discounts.splice(data.index, 1)" variant="default md-btn-flat icon-btn" size="sm">
                  <i class="ion ion-md-close"></i>
                </b-btn>
              </template>
            </b-table>
          </div>
          <b-btn variant="outline-primary" @click="productData.discounts.push({ discount: '', type: 'General', code: '', quantity: '', start_date: '', end_date: '' })">
            <i class="ion ion-md-add"></i>&nbsp; Add discount
          </b-btn>

        </b-card-body>
      </b-tab>
      <b-tab title="Images">
        <b-card-body>
          <draggable v-model="productData.images" :options="draggableOptions">

            <div v-for="(i, index) in productData.images" :key="i.image" class="media align-items-center bg-white ui-bordered py-3 mb-2">
              <div class="product-image-move ion ion-ios-move text-muted text-big p-4"></div>
              <a :href="`${baseUrl}img/uikit/${i.image}`" target="_blank" class="d-block ui-w-100 mr-4">
                <img :src="`${baseUrl}img/uikit/${i.image}`" class="img-fluid" alt="">
              </a>
              <div class="media-body">
                <input type="text" :value="`example.com/img/uikit/${i.image}`" class="form-control form-control-sm bg-transparent border-light mb-2" readonly>
                <label class="switcher switcher-sm">
                  <input type="radio" name="product-primary-image" class="switcher-input" :checked="i.primary" @change="setPrimaryImage(index)">
                  <span class="switcher-indicator">
                    <span class="switcher-yes"></span>
                    <span class="switcher-no"></span>
                  </span>
                  <span class="switcher-label">Primary image</span>
                </label>
              </div>
              <b-btn @click="productData.images.splice(index, 1)" variant="outline-danger borderless icon-btn" class="d-block mx-4">
                <i class="ion ion-md-close"></i>
              </b-btn>
            </div>

          </draggable>
          <b-btn variant="outline-primary" class="mt-3">
            <i class="ion ion-md-cloud-upload"></i>&nbsp; Upload images
          </b-btn>

        </b-card-body>
      </b-tab>
    </b-tabs>

    <div class="text-right mt-3">
      <b-btn variant="default">Cancel</b-btn> &nbsp;
      <b-btn variant="primary">Save changes</b-btn>
    </div>

  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>

<style lang="scss">
  .ql-container.ql-snow {
    height: 600px;
  }
</style>

<!-- Page -->
<style src="@/vendor/styles/pages/products.scss" lang="scss"></style>

<script>
import Multiselect from 'vue-multiselect'
import flatPickr from 'vue-flatpickr-component'
import draggable from 'vuedraggable'

export default {
  name: 'pages-e-commerce-product-edit',
  metaInfo: {
    title: 'Product edit - Pages'
  },
  components: {
    Multiselect,
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {}),
    flatPickr,
    draggable
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
        { discount: '5', type: 'General', code: '', quantity: '100', start_date: '', end_date: '' },
        { discount: '10', type: 'General', code: '', quantity: '', start_date: '02/01/2018', end_date: '03/01/2018' },
        { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', start_date: '02/12/2018', end_date: '03/05/2018' },
        { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', start_date: '02/23/2018', end_date: '04/06/2018' },
        { discount: '10', type: 'General', code: '', quantity: '', start_date: '05/14/2018', end_date: '05/30/2018' }
      ],

      // Description
      description: 'Item description'
    },

    editorOptions: {
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }, { 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    },

    draggableOptions: {
      animation: 150,
      handle: '.product-image-move'
    }
  }),
  methods: {
    setPrimaryImage (index) {
      const images = this.productData.images.slice(0)
      images.map((img, _index) => { img.primary = index === _index })
      this.productData.images = images
    }
  }
}
</script>
