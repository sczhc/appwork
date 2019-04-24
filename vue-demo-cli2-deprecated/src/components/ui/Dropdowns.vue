<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Dropdowns
    </h4>

    <div class="bg-lighter rounded p-4 mb-4 clearfix">
      <div class="dropdown-menu d-block position-static float-left">
        <b-dd-item><b-badge variant="success" class="float-right">34</b-badge>Action</b-dd-item>
        <b-dd-item><b-badge pill variant="primary" class="float-right">16</b-badge>Another action</b-dd-item>
        <b-dd-item disabled>Something else here</b-dd-item>
        <b-dd-divider />
        <b-dd-header>Dropdown header</b-dd-header>
        <b-dd-item active><i class="ion ion-md-cloud"></i> &nbsp;With icon</b-dd-item>
        <b-dd-item>Last action</b-dd-item>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">

        <b-card header="Nested" header-tag="h6" class="mb-4">
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
        </b-card>

      </div>
      <div class="col-md-6">

        <b-card header="Hover" header-tag="h6" class="mb-4">
          <b-dd v-hover-dropdown variant="primary" text="Hover" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-item>Something else here</b-dd-item>
            <b-dd-divider />
            <b-dd-item>Separated link</b-dd-item>
          </b-dd>
        </b-card>

      </div>
    </div>

    <b-card no-body header="Button dropdowns" header-tag="h6" class="mb-4">
      <b-card-body>
        <small class="text-light font-weight-semibold">Variations</small>
        <div class="demo-inline-spacing mt-3">
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
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <small class="text-light font-weight-semibold">Hidden arrow</small>
        <div class="demo-inline-spacing mt-3">
          <b-dd variant="primary" text="Primary" class="dropdown-toggle-hide-arrow" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-item>Something else here</b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item>Separated link</b-dd-item>
          </b-dd>

          <b-dd variant="secondary" text="Secondary" class="dropdown-toggle-hide-arrow" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-item>Something else here</b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item>Separated link</b-dd-item>
          </b-dd>
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <small class="text-light font-weight-semibold">Split</small>
        <div class="demo-inline-spacing mt-3">
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
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <small class="text-light font-weight-semibold">Sizes</small>
        <div class="demo-vertical-spacing-sm mt-3">
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
      </b-card-body>
    </b-card>

    <b-card header="Vue Context Menu" header-tag="h6" class="mb-4">
      <div class="text-center" style="height: 300px; border:1px solid #ddd" @contextmenu.prevent="$refs.ctxMenu.open">
        <span style="line-height: 300px">Right click anywhere inside this box</span>
      </div>

      <context-menu id="ctxMenuExample" ref="ctxMenu">
        <button type="button" class="dropdown-item" @click="clicked('Option 1')">Option 1</button>
        <button type="button" class="dropdown-item disabled">Option 2</button>
        <button type="button" class="dropdown-item" @click="clicked('Option 3')">Option 3</button>
      </context-menu>
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-context-menu/vue-context-menu.scss" lang="scss"></style>

<script>
import '@/vendor/libs/hover-dropdown/HoverDropdown'
import contextMenu from 'vue-context-menu'

export default {
  name: 'ui-dropdowns',
  metaInfo: {
    title: 'Dropdowns - UI elements'
  },
  components: {
    contextMenu
  },
  methods: {
    clicked (item) {
      alert(`${item} clicked!`)
    }
  }
}
</script>
