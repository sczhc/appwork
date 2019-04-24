<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-tables-2</h3>
    <a target="_blank" href="https://github.com/matfish2/vue-tables-2" class="ui-block-description">https://github.com/matfish2/vue-tables-2</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <v-client-table :data="tableData" :columns="columns" :options="options">
        <template slot="edit" slot-scope="props">
          <div>
            <b-btn variant="outline-success borderless icon-btn" class="btn-xs" @click.prevent="edit(props.row)"><i class="ion ion-md-create"></i></b-btn>
            <b-btn variant="outline-danger borderless icon-btn" class="btn-xs" @click.prevent="remove(props.row)"><i class="ion ion-md-close"></i></b-btn>
          </div>
        </template>
        <template slot="child_row" slot-scope="props">
          <div><b>First name:</b> {{props.row.first_name}}</div>
          <div><b>Last name:</b> {{props.row.last_name}}</div>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-data-tables/vue-data-tables.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import { ClientTable } from 'vue-tables-2'

Vue.use(ClientTable)

export default {
  data: () => ({
    tableData: [],
    columns: ['first_name', 'last_name', 'gender', 'company', 'edit'],
    options: {
      pagination: { chunk: 5 },
      sortIcon: {
        is: 'fa-sort',
        base: 'fas',
        up: 'fa-sort-up',
        down: 'fa-sort-down'
      }
    }
  }),
  created () {
    // Fetch json data
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}json/table-data.json`)

    req.onload = () => {
      const data = JSON.parse(req.response)

      // Add IDs for child rows functionality
      this.tableData = data.map((item, index) => {
        item['id'] = index
        return item
      })
    }

    req.send()
  },
  methods: {
    edit (row) {
      alert(`Edit: ${row.first_name} ${row.last_name}`)
    },
    remove (row) {
      alert(`Remove: ${row.first_name} ${row.last_name}`)
    }
  }
}
</script>
