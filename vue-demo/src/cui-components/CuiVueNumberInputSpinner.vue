<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-number-input-spinner</h3>
    <a target="_blank" href="https://github.com/krystalcampioni/vue-number-input-spinner" class="ui-block-description">https://github.com/krystalcampioni/vue-number-input-spinner</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <NumberInputSpinner
        :min="0"
        :max="20"
        inputClass="form-control"
        buttonClass="btn btn-secondary"
        :integerOnly="true"
        v-model="value1" />

      <pre>Value: {{ value1 }}</pre>

      <!-- Sizes -->

      <NumberInputSpinner :integerOnly="true" v-model="value2"
        inputClass="form-control form-control-sm"
        buttonClass="btn btn-secondary btn-sm" />

      <NumberInputSpinner :integerOnly="true" v-model="value3"
        inputClass="form-control form-control-lg"
        buttonClass="btn btn-secondary btn-lg" />
    </div>
  </div>
</template>

<!-- Styles -->
<style src="@/vendor/libs/vue-number-input-spinner/vue-number-input-spinner.scss" lang="scss"></style>

<script>
import NumberInputSpinner from 'vue-number-input-spinner'

export default {
  components: {
    NumberInputSpinner
  },
  data: () => ({
    value1: 3,
    value2: 1,
    value3: 6
  })
}
</script>
