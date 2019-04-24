<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Controls
    </h4>

    <b-card header="Input" header-tag="h6" class="mb-4">
      <b-input placeholder="Text input" />
    </b-card>

    <b-card header="Textarea" header-tag="h6" class="mb-4">
      <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" />
    </b-card>

    <b-card no-body header="Checkboxes and radios" header-tag="h6" class="mb-4">
      <b-card-body>
        <!-- Checkboxes -->
        <b-check-group plain stacked v-model="multipleModel" :options="options" />
        <br>

        <!-- Radios -->
        <b-radio-group plain stacked v-model="singleModel" :options="options" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Inline</div>

        <!-- Checkboxes -->
        <b-check-group plain v-model="multipleModel" :options="options" />

        <!-- Radios -->
        <b-radio-group plain v-model="singleModel" :options="options" />
      </b-card-body>
    </b-card>

    <b-card header="Selects" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-sm">
        <b-select plain v-model="singleModel" :options="options" />

        <!-- Multiple -->
        <b-select plain multiple v-model="multipleModel" :options="options" />
      </div>
    </b-card>

    <b-card header="Disabled" header-tag="h6" class="mb-4">
      <fieldset disabled class="demo-vertical-spacing-sm">
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
    </b-card>

    <b-card no-body header="Inverted" header-tag="h6" bg-variant="dark" text-variant="white" class="mb-4">
      <b-card-body class="demo-vertical-spacing-sm">
        <b-input placeholder="Text input" class="form-control-inverted" />
        <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" class="form-control-inverted" />
        <b-select plain v-model="singleModel" :options="options" class="form-control-inverted" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-vertical-spacing-sm">
        <b-input placeholder="Disabled input" class="form-control-inverted" disabled />
        <b-select plain v-model="singleModel" :options="options" class="form-control-inverted" disabled />
        <b-textarea v-model="textareaValue" :rows="3" :max-rows="6" class="form-control-inverted" disabled />
      </b-card-body>
    </b-card>

    <b-card header="Read only" header-tag="h6" class="mb-4">
      <b-input placeholder="Readonly input here…" readonly />
    </b-card>

    <b-card header="Sizes" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-sm">
        <b-input placeholder=".form-control-lg" size="lg" />
        <b-input placeholder=".form-control-sm" size="sm" />
        <b-select plain v-model="singleModel" :options="options" size="lg" />
        <b-select plain v-model="singleModel" :options="options" size="sm" />
      </div>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'forms-controls',
  metaInfo: {
    title: 'Controls - Forms'
  },
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
