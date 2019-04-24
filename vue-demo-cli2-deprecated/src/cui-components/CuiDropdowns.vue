<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Dropdowns</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example clearfix">
      <div class="dropdown-menu float-left" style="display: block; position: relative;">
        <b-dd-item><b-badge variant="success" class="float-right">34</b-badge>Action</b-dd-item>
        <b-dd-item><b-badge pill variant="primary" class="float-right">16</b-badge>Another action</b-dd-item>
        <b-dd-item disabled>Something else here</b-dd-item>
        <b-dd-divider />
        <b-dd-header>Dropdown header</b-dd-header>
        <b-dd-item active><i class="ion ion-md-cloud"></i> &nbsp;With icon</b-dd-item>
        <b-dd-item>Last action</b-dd-item>
      </div>
    </div>

    <h4 class="ui-block-heading">Hover dropdowns</h4>

    <div class="cui-example clearfix">
      <b-dd v-hover-dropdown variant="primary" text="Hover" :right="isRTL">
        <b-dd-item>Action</b-dd-item>
        <b-dd-item>Another action</b-dd-item>
        <b-dd-item>Something else here</b-dd-item>
        <b-dd-divider />
        <b-dd-item>Separated link</b-dd-item>
      </b-dd>
    </div>

    <h4 class="ui-block-heading">Nested</h4>

    <div class="cui-example">
      <b-dd variant="default" text="Nested dropdowns" :right="isRTL">
        <b-dd-item>First action</b-dd-item>

        <div class="dropdown-toggle">
          <b-dd-item>First menu</b-dd-item>
          <div class="dropdown-menu">
            <b-dd-item>First action</b-dd-item>
            <b-dd-item>Second action</b-dd-item>

            <div class="dropdown-toggle">
              <b-dd-item>First menu</b-dd-item>
              <div class="dropdown-menu">
                <b-dd-item>First action</b-dd-item>
                <b-dd-item>Second action</b-dd-item>
              </div>
            </div>
          </div>
        </div>

        <b-dd-item>Second action</b-dd-item>

        <div class="dropdown-toggle">
          <b-dd-item>Second menu</b-dd-item>
          <div class="dropdown-menu">
            <b-dd-item>First action</b-dd-item>
            <b-dd-item>Second action</b-dd-item>
          </div>
        </div>
      </b-dd>
    </div>
  </div>
</template>

<script>
import '@/vendor/libs/hover-dropdown/HoverDropdown'

export default {}
</script>
