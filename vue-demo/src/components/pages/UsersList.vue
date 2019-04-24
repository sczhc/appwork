<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Users
    </h4>

    <!-- Filters -->
    <div class="ui-bordered px-4 pt-4 mb-4">
      <div class="form-row align-items-center">
        <div class="col-md mb-4">
          <label class="form-label">Verified</label>
          <b-select v-model="filterVerified" :options="['Any', 'Yes', 'No']" />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Role</label>
          <b-select v-model="filterRole" :options="['Any', 'User', 'Author', 'Staff', 'Admin']" />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Status</label>
          <b-select v-model="filterStatus" :options="['Any', 'Active', 'Banned', 'Deleted']" />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Latest activity</label>
          <flat-pickr v-model="filterLatestActivity" :config="{ altInput: true, animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y', mode: 'range' }" :placeholder="!isIEMode ? 'Any' : null" />
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
          :items="usersData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage"
          class="card-table">

          <template slot="account" slot-scope="data">
            <a href="javascript:void(0)">{{data.item.account}}</a>
          </template>

          <template slot="verified" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.verified, 'ion-md-close text-light': !data.item.verified}"></span>
          </template>

          <template slot="role" slot-scope="data">
            <span v-if="data.item.role === 1">User</span>
            <span v-if="data.item.role === 2">Author</span>
            <span v-if="data.item.role === 3">Staff</span>
            <span v-if="data.item.role === 4">Admin</span>
          </template>

          <template slot="status" slot-scope="data">
            <b-badge variant="outline-success" v-if="data.item.status === 1">Active</b-badge>
            <b-badge variant="outline-danger" v-if="data.item.status === 2">Banned</b-badge>
            <b-badge variant="outline-default" v-if="data.item.status === 3">Deleted</b-badge>
          </template>

          <template slot="actions" slot-scope="data">
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Edit"><i class="ion ion-md-create"></i></b-btn>
            <b-dropdown variant="default btn-xs icon-btn md-btn-flat hide-arrow" :right="!isRTL">
              <template slot="button-content"><i class="ion ion-ios-settings"></i></template>
              <b-dropdown-item href="javascript:void(0)">View profile</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Ban user</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
            </b-dropdown>
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
  name: 'pages-user-list',
  metaInfo: {
    title: 'User list - Pages'
  },
  components: {
    flatPickr
  },
  data: () => ({
    // Options
    dataUrl: 'json/pages_users_list.json',
    searchKeys: ['id', 'account', 'email', 'name'],
    sortBy: 'id',
    sortDesc: false,
    perPage: 10,

    fields: [
      { key: 'id', sortable: true, tdClass: 'align-middle' },
      { key: 'account', sortable: true, tdClass: 'align-middle' },
      { key: 'email', sortable: true, tdClass: 'align-middle' },
      { key: 'name', sortable: true, tdClass: 'align-middle' },
      { key: 'latest_activity', sortable: true, tdClass: 'align-middle' },
      { key: 'verified', sortable: true, tdClass: 'align-middle' },
      { key: 'role', sortable: true, tdClass: 'align-middle' },
      { key: 'status', sortable: true, tdClass: 'align-middle' },
      { key: 'actions', label: ' ', tdClass: 'text-nowrap align-middle text-center' }
    ],

    // Filters
    filterVerified: 'Any',
    filterRole: 'Any',
    filterStatus: 'Any',
    filterLatestActivity: null,

    usersData: [],
    originalUsersData: [],

    currentPage: 1
  }),

  computed: {
    totalItems () {
      return this.usersData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },

  methods: {
    filter (value) {
      const val = value.toLowerCase()
      const filtered = this.originalUsersData.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })
      this.usersData = filtered
    }
  },

  created () {
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}${this.dataUrl}`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.usersData = data
      this.originalUsersData = data.slice(0)
    }

    req.send()
  }
}
</script>
