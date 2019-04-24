<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Progress bars</h3>

    <h4 class="ui-block-heading">Basic</h4>

    <div class="cui-example">
      <b-progress :value="60" height="0.75rem" />
    </div>

    <h4 class="ui-block-heading">Height</h4>

    <div class="cui-example">
      <b-progress :value="60" height="0.25rem" />
    </div>

    <h4 class="ui-block-heading">With label</h4>

    <div class="cui-example">
      <b-progress :value="30" show-progress height="0.75rem" />
    </div>

    <h4 class="ui-block-heading">Variations</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-progress variant="secondary" :value="30" height="0.75rem" />
      <b-progress variant="success" :value="40" height="0.75rem" />
      <b-progress variant="info" :value="20" height="0.75rem" />
      <b-progress variant="warning" :value="60" height="0.75rem" />
      <b-progress variant="danger" :value="80" height="0.75rem" />
      <b-progress variant="dark" :value="50" height="0.75rem" />
    </div>

    <h4 class="ui-block-heading">Striped</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-progress striped :value="45" height="0.75rem" />
      <b-progress variant="secondary" striped :value="30" height="0.75rem" />
      <b-progress variant="success" striped :value="40" height="0.75rem" />
      <b-progress variant="info" striped :value="20" height="0.75rem" />
      <b-progress variant="warning" striped :value="60" height="0.75rem" />
      <b-progress variant="danger" striped :value="80" height="0.75rem" />
      <b-progress variant="dark" striped :value="50" height="0.75rem" />
    </div>

    <h4 class="ui-block-heading">Animated</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-progress striped animated :value="45" height="0.75rem" />
      <b-progress variant="secondary" striped animated :value="30" height="0.75rem" />
      <b-progress variant="success" striped animated :value="40" height="0.75rem" />
      <b-progress variant="info" striped animated :value="20" height="0.75rem" />
      <b-progress variant="warning" striped animated :value="60" height="0.75rem" />
      <b-progress variant="danger" striped animated :value="80" height="0.75rem" />
      <b-progress variant="dark" striped animated :value="50" height="0.75rem" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
