<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Tables /</span> Bootstrap
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <h6>Table options</h6>
    <div class="mb-4">
      <b-check v-model="isStriped">Striped</b-check>
      <b-check v-model="isHoverable">Hoverable</b-check>
      <b-check v-model="isBordered">Bordered</b-check>
      <b-check v-model="isSmall">Small</b-check>
      <b-check v-model="isFixed">Fixed</b-check>
      <b-check v-model="isDark">Dark</b-check>
      <b-check v-model="isFootClone">Footer</b-check>
      <label>
        Header/footer:
        <b-select size="sm" v-model="headerStyle" :options="headerStyleOptions" class="d-inline-block w-auto" />
      </label>
    </div>

    <!-- Table controls -->
    <div class="row">
      <div class="col">
        <b-form-group>
          Per page: &nbsp;
          <b-select size="sm" :options="perPageOptions" v-model="perPage" class="d-inline-block w-auto" />
        </b-form-group>
      </div>
      <div class="col">
        <b-form-group>
          <b-input size="sm"  placeholder="Search..." class="d-inline-block w-auto float-sm-right" @input="filter($event)" />
        </b-form-group>
      </div>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <b-table
        :items="jsonData"
        :striped="isStriped"
        :hover="isHoverable"
        :bordered="isBordered"
        :small="isSmall"
        :fixed="isFixed"
        :dark="isDark"
        :foot-clone="isFootClone"
        :head-variant="headerStyle"
        :current-page="currentPage"
        :per-page="perPage">
      </b-table>
    </div>

    <!-- Pagination -->
    <div class="row">
      <div class="col-sm text-sm-left text-center mb-3 mb-sm-0">
        <span class="text-muted" v-if="totalPages">Page {{ currentPage }} of {{ totalPages }}</span>
      </div>
      <div class="col-sm">
        <b-pagination class="justify-content-center justify-content-sm-end"
          v-if="totalItems"
          v-model="currentPage"
          :total-rows="totalItems"
          :per-page="perPage"
          size="sm" />
      </div>
    </div>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      Contextual classes
    </h6>

    <div class="demo-vertical-spacing">
      <table class="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Column heading</th>
            <th>Column heading</th>
            <th>Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active">
            <th scope="row">Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">Default</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-primary">
            <th scope="row">Primary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-secondary">
            <th scope="row">Secondary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Success</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">Danger</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-warning">
            <th scope="row">Warning</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-info">
            <th scope="row">Info</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-dark">
            <th scope="row">Dark</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Column heading</th>
            <th>Column heading</th>
            <th>Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-primary">
            <th scope="row">1</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="bg-secondary">
            <th scope="row">3</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="bg-success">
            <th scope="row">5</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="bg-danger">
            <th scope="row">7</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="bg-warning">
            <th scope="row">9</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="bg-info">
            <th scope="row">11</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      Within card
    </h6>

    <b-card no-body header="Table within card">
      <table class="table card-table">
        <thead class="thead-light">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </b-card>

    <hr class="border-light container-m--x my-4">
    <h6 class="text-muted small font-weight-bold py-3 my-4">
      Responsive tables
    </h6>

    <div class="demo-vertical-spacing">
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tables-bootstrap',
  metaInfo: {
    title: 'Bootstrap - Tables'
  },
  data: () => ({
    jsonData: [],
    originalJsonData: [],

    // Pagination
    perPageOptions: [10, 20, 30, 40, 50],
    perPage: 10,
    currentPage: 1,

    // Table options
    headerStyleOptions: [{ text: 'Default', value: null }, { text: 'Light', value: 'light' }, { text: 'Dark', value: 'dark' }],
    isStriped: false,
    isHoverable: false,
    isBordered: false,
    isSmall: false,
    isFixed: false,
    isDark: false,
    isFootClone: false,
    headerStyle: null
  }),
  computed: {
    totalItems () {
      return this.jsonData.length
    },
    totalPages () {
      return Math.floor(this.totalItems / this.perPage) || (this.totalItems ? 1 : 0)
    }
  },
  created () {
    // Fetch json data
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}json/table-data.json`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.jsonData = data
      this.originalJsonData = data.slice(0)
    }

    req.send()
  },
  methods: {
    filter (value) {
      const val = value.toLowerCase()

      // filter our data
      const filtered = this.originalJsonData.filter(d => {
        // Concat data
        return Object.keys(d)
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })

      // update the rows
      this.jsonData = filtered
    }
  }
}
</script>
