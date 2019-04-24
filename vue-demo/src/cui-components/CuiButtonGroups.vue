<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Button groups</h3>

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <!-- Extra-large -->
      <b-btn-group class="btn-group-xl">
        <b-btn>Left</b-btn>
        <b-btn>Middle</b-btn>
        <b-btn>Right</b-btn>
      </b-btn-group>

      <br>

      <!-- Large -->
      <b-btn-group size="lg">
        <b-btn>Left</b-btn>
        <b-btn>Middle</b-btn>
        <b-btn>Right</b-btn>
      </b-btn-group>

      <br>

      <!-- Default -->
      <b-btn-group>
        <b-btn>Left</b-btn>
        <b-btn>Middle</b-btn>
        <b-btn>Right</b-btn>
      </b-btn-group>

      <br>

      <!-- Small -->
      <b-btn-group class="btn-group-sm">
        <b-btn>Left</b-btn>
        <b-btn>Middle</b-btn>
        <b-btn>Right</b-btn>
      </b-btn-group>

      <br>

      <!-- Extra-small -->
      <b-btn-group class="btn-group-xs">
        <b-btn>Left</b-btn>
        <b-btn>Middle</b-btn>
        <b-btn>Right</b-btn>
      </b-btn-group>
    </div>

    <h4 class="ui-block-heading">Button toolbars</h4>

    <div class="cui-example">
      <b-btn-toolbar key-nav>
        <b-btn-group class="mr-2">
          <b-btn>&laquo;</b-btn>
          <b-btn>&lsaquo;</b-btn>
        </b-btn-group>
        <b-btn-group class="mr-2">
          <b-btn>Edit</b-btn>
          <b-btn>Undo</b-btn>
          <b-btn>Redo</b-btn>
        </b-btn-group>
        <b-btn-group>
          <b-btn>&rsaquo;</b-btn>
          <b-btn>&raquo;</b-btn>
        </b-btn-group>
      </b-btn-toolbar>
    </div>

    <h4 class="ui-block-heading">Nesting</h4>

    <div class="cui-example">
      <b-btn-group>
        <b-btn>1</b-btn>
        <b-btn>2</b-btn>
        <b-dd :right="isRTL" text="Dropdown">
          <b-dd-item>Dropdown link</b-dd-item>
          <b-dd-item>Dropdown link</b-dd-item>
        </b-dd>
      </b-btn-group>
    </div>

    <h4 class="ui-block-heading">Vertical</h4>

    <div class="cui-example">
      <b-btn-group vertical>
        <b-btn class="btn btn-secondary">Button</b-btn>
        <b-btn class="btn btn-secondary">Button</b-btn>
        <b-dd :right="isRTL" text="Dropdown">
          <b-dd-item>Dropdown link</b-dd-item>
          <b-dd-item>Dropdown link</b-dd-item>
        </b-dd>
        <b-btn class="btn btn-secondary">Button</b-btn>
        <b-btn class="btn btn-secondary">Button</b-btn>
        <b-dd :right="isRTL" text="Dropdown">
          <b-dd-item>Dropdown link</b-dd-item>
          <b-dd-item>Dropdown link</b-dd-item>
        </b-dd>
        <b-dd :right="isRTL" text="Dropdown">
          <b-dd-item>Dropdown link</b-dd-item>
          <b-dd-item>Dropdown link</b-dd-item>
        </b-dd>
        <b-dd :right="isRTL" text="Dropdown">
          <b-dd-item>Dropdown link</b-dd-item>
          <b-dd-item>Dropdown link</b-dd-item>
        </b-dd>
      </b-btn-group>
    </div>
  </div>
</template>

<script>
export default {}
</script>
