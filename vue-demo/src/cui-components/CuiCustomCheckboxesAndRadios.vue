<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Custom checkboxes and radios</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Custom checkbox -->
      <b-check-group v-model="multipleModel" :options="options" />

      <!-- Indeterminate custom checkbox -->
      <b-form-checkbox v-model="indeterminateChecked" :indeterminate.sync="indeterminate">
        Indeterminate
      </b-form-checkbox>

      <!-- Custom radios -->
      <b-radio-group v-model="singleModel" :options="options" />
    </div>

    <h4 class="ui-block-heading">Disabled</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Custom checkboxes -->
      <b-check-group v-model="multipleModel" :options="options" disabled />

      <!-- Indeterminate custom checkbox -->
      <b-form-checkbox v-model="dIndeterminateChecked" :indeterminate.sync="dIndeterminate" disabled>
        Indeterminate
      </b-form-checkbox>

      <!-- Custom radios -->
      <fieldset disabled>
        <b-radio-group v-model="singleModel" :options="options" />
      </fieldset>
    </div>

    <h4 class="ui-block-heading">Validation states</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-check :state="'valid'">Valid state</b-check>
      <b-check :state="'invalid'">Invalid state</b-check>
    </div>

    <h4 class="ui-block-heading">Stacked</h4>

    <div class="cui-example">
      <!-- Checkboxs -->
      <b-check-group stacked v-model="multipleModel" :options="options" />

      <br>

      <!-- Radios -->
      <b-radio-group stacked v-model="singleModel" :options="options" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      { text: 'Orange', value: 'orange' },
      { text: 'Apple', value: 'apple' },
      { text: 'Pineapple', value: 'pineapple' },
      { text: 'Grape', value: 'grape', disabled: true }
    ],
    singleModel: 'apple',
    multipleModel: ['orange'],
    indeterminateChecked: false,
    indeterminate: true,
    dIndeterminateChecked: false,
    dIndeterminate: true
  })
}
</script>
