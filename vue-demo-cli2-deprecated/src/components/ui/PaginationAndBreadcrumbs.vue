<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Pagination and breadcrumbs
    </h4>

    <b-card no-body header="Pagination" header-tag="h6" class="mb-4">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Default</div>

        <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Sizes</div>

        <b-pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10" />
        <b-pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10" />
      </b-card-body>
    </b-card>

    <b-card no-body header="Breadcrumbs" header-tag="h6" class="mb-4">
      <b-card-body class="demo-vertical-spacing">
        <b-breadcrumb :items="items1"/>
        <b-breadcrumb :items="items2"/>
        <b-breadcrumb :items="items3"/>
      </b-card-body>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'ui-pagination-and-breadcrumbs',
  metaInfo: {
    title: 'Pagination and breadcrumbs - UI elements'
  },
  data: () => ({
    currentPage: 3,

    items1: [{ text: 'Admin', active: true }],
    items2: [{ text: 'Admin', href: '#' }, { text: 'Manage', active: true }],
    items3: [{ text: 'Admin', href: '#' }, { text: 'Manage', href: '#' }, { text: 'Library', active: true }]
  })
}
</script>
