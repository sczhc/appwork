<template>
  <div class="ui-block ui-block-inline ui-block-pagination">
    <h3 class="ui-block-heading">Pagination</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10" />
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10" />
      <b-pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentPage: 3
  })
}
</script>
