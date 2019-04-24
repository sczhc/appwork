<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-input-tag</h3>
    <a target="_blank" href="https://github.com/matiastucci/vue-input-tag" class="ui-block-description">https://github.com/matiastucci/vue-input-tag</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <input-tag :tags="tags" placeholder="Add a tag" :read-only="readonly" />

      <b-btn variant="default"  @click="readonly = !readonly">Toggle read-only</b-btn>

      <!-- Variations -->

      <input-tag class="input-tag-primary" :tags="tags" />
      <input-tag class="input-tag-secondary" :tags="tags" />
      <input-tag class="input-tag-success" :tags="tags" />
      <input-tag class="input-tag-warning" :tags="tags" />
      <input-tag class="input-tag-info" :tags="tags" />
      <input-tag class="input-tag-danger" :tags="tags" />
      <input-tag class="input-tag-dark" :tags="tags" />

      <!-- Validation states -->

      <input-tag class="is-valid" :tags="tags" />
      <input-tag class="is-invalid" :tags="tags" />

    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-input-tag/vue-input-tag.scss" lang="scss"></style>

<script>
import InputTag from 'vue-input-tag'

export default {
  components: {
    InputTag
  },
  data: () => ({
    readonly: false,
    tags: ['Orange', 'Apple', 'Pineapple']
  })
}
</script>
