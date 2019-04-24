<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Input spinner
    </h4>

    <b-card header="Vue Number Input Spinner" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing">
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
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-number-input-spinner/vue-number-input-spinner.scss" lang="scss"></style>

<script>
import NumberInputSpinner from 'vue-number-input-spinner'

export default {
  name: 'forms-input-spinner',
  metaInfo: {
    title: 'Input spinner - Forms'
  },
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
