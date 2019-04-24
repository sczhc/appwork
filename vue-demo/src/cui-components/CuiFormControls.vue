<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Form controls</h3>

    <h4 class="ui-block-heading">Inputs</h4>

    <div class="cui-example">
      <b-input placeholder="Text input" />
    </div>

    <h4 class="ui-block-heading">Textarea</h4>

    <div class="cui-example">
      <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" />
    </div>

    <h4 class="ui-block-heading">Checkboxes and radios</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Checkboxes -->
      <b-check-group plain stacked v-model="multipleModel" :options="options" />

      <!-- Radios -->
      <b-radio-group plain stacked v-model="singleModel" :options="options" />
    </div>

    <h4 class="ui-block-heading">Inline checkboxes and radios</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Checkboxes -->
      <b-check-group plain v-model="multipleModel" :options="options" />

      <!-- Radios -->
      <b-radio-group plain v-model="singleModel" :options="options" />
    </div>

    <h4 class="ui-block-heading">Selects</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-select plain v-model="singleModel" :options="options" />

      <!-- Multiple -->
      <b-select plain multiple v-model="multipleModel" :options="options" />
    </div>

    <h4 class="ui-block-heading">Inverted</h4>

    <div class="cui-example">
      <div class="cui-example-vertical-spacing-sm bg-dark p-4">
        <b-input placeholder="Text input" class="form-control-inverted" />

        <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" class="form-control-inverted" />

        <b-select plain v-model="singleModel" :options="options" class="form-control-inverted" />
      </div>
    </div>

    <h4 class="ui-block-heading">Disabled</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <fieldset disabled class="cui-example-vertical-spacing-sm">
        <b-form-group disabled="Disabled input">
          <b-input placeholder="Disabled input" />
        </b-form-group>
        <b-form-group label="Disabled select menu">
          <b-select plain v-model="singleModel" :options="options" />
        </b-form-group>
        <b-form-group>
          <b-check-group plain v-model="multipleModel" :options="options" />
        </b-form-group>
        <b-btn variant="primary">Submit</b-btn>
      </fieldset>

      <div class="cui-example-vertical-spacing-sm bg-dark p-4">
        <b-input placeholder="Disabled input" class="form-control-inverted" disabled />
        <b-select plain v-model="singleModel" :options="options" class="form-control-inverted" disabled />
        <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" class="form-control-inverted" disabled />
      </div>
    </div>

    <h4 class="ui-block-heading">Read only</h4>

    <div class="cui-example">
      <b-input placeholder="Readonly input here…" readonly />
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-input placeholder=".form-control-lg" size="lg" />
      <b-input placeholder=".form-control-sm" size="sm" />
      <b-select plain v-model="singleModel" :options="options" size="lg" />
      <b-select plain v-model="singleModel" :options="options" size="sm" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    textareaValue: '',
    options: [
      { text: 'Orange', value: 'orange' },
      { text: 'Apple', value: 'apple' },
      { text: 'Pineapple', value: 'pineapple' },
      { text: 'Grape', value: 'grape', disabled: true }
    ],
    singleModel: 'apple',
    multipleModel: ['orange']
  })
}
</script>
