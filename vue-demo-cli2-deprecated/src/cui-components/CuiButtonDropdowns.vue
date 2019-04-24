<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Button dropdowns</h3>

    <h4 class="ui-block-heading">Variations</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd variant="default" text="Default" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="primary" text="Primary" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="secondary" text="Secondary" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="success" text="Success" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="info" text="Info" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="warning" text="Warning" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="danger" text="Danger" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd variant="dark" text="Dark" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Hidden arrow</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd variant="primary" text="Primary" class="dropdown-toggle-hide-arrow" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Split</h4>

    <div class="cui-example cui-example-inline-spacing">
      <b-dd split variant="default" text="Default" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="primary" text="Primary" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="secondary" text="Secondary" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="success" text="Success" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="info" text="Info" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="warning" text="Warning" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="danger" text="Danger" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>

      <b-dd split variant="dark" text="Dark" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-dd text="Extra large button" :right="isRTL" class="btn-group-xl">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Large button" :right="isRTL" size="lg">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Small button" :right="isRTL" size="sm">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
      <br>

      <b-dd text="Extra small button" :right="isRTL" class="btn-group-xs">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider></b-dd-divider>
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>
  </div>
</template>

<script>
export default {}
</script>
