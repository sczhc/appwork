<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">File browser</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-file v-model="file"></b-file>
    </div>

    <h4 class="ui-block-heading">Disabled</h4>

    <div class="cui-example">
      <b-file v-model="file" disabled></b-file>
    </div>

    <h4 class="ui-block-heading">Validation states</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-file v-model="file" :state="'valid'"></b-file>
      <b-file v-model="file" :state="'invalid'"></b-file>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    file: null
  })
}
</script>
