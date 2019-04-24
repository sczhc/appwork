<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Button groups
    </h4>

    <div class="row">
      <div class="col-12">

        <b-card no-body header="Sizes" header-tag="h6" class="mb-4">
          <b-card-body class="demo-vertical-spacing">
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
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card header="Toolbar" header-tag="h6" class="mb-4">
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
        </b-card>

      </div>
      <div class="col-12">

        <b-card header="Nesting" header-tag="h6" class="mb-4">
          <b-btn-group>
            <b-btn>1</b-btn>
            <b-btn>2</b-btn>
            <b-dd :right="isRTL" text="Dropdown">
              <b-dd-item>Dropdown link</b-dd-item>
              <b-dd-item>Dropdown link</b-dd-item>
            </b-dd>
          </b-btn-group>
        </b-card>

      </div>
      <div class="col-12">

        <b-card header="Vertical" header-tag="h6" class="mb-4">
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
        </b-card>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-button-groups',
  metaInfo: {
    title: 'Button groups - UI elements'
  }
}
</script>
