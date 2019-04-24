<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Custom select</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-select v-model="selected" :options="options" />
      <b-select v-model="selected" :select-size="3" :options="options" />
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-select v-model="selected" :options="options" size="lg" />
      <b-select v-model="selected" :select-size="3" :options="options" size="lg" />
      <b-select v-model="selected" :options="options" size="sm" />
      <b-select v-model="selected" :select-size="3" :options="options" size="sm" />
    </div>

    <h4 class="ui-block-heading">Inverted</h4>

    <div class="cui-example">
      <div class="bg-dark p-4">
        <b-select v-model="selected" :options="options" class="custom-select-inverted" />
      </div>
    </div>

    <h4 class="ui-block-heading">Disabled</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-select v-model="selected" :options="options" disabled />

      <div class="bg-dark p-4">
        <b-select v-model="selected" :options="options" class="custom-select-inverted" disabled />
      </div>
    </div>

    <h4 class="ui-block-heading">Validation states</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-select v-model="selected" :options="options" :state="'valid'" />
      <b-select v-model="selected" :options="options" :state="'invalid'" />
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
    selected: 'apple'
  })
}
</script>
