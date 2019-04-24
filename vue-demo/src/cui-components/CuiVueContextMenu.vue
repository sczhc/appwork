<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-context-menu</h3>
    <a target="_blank" href="https://github.com/vmaimone/vue-context-menu" class="ui-block-description">https://github.com/vmaimone/vue-context-menu</a>

    <div class="no-ie10" data-name="vue-context-menu"></div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <div class="text-center" style="height: 300px; border:1px solid #ddd" @contextmenu.prevent="$refs.ctxMenu.open">
        <span style="line-height: 300px">Right click anywhere inside this box</span>
      </div>

      <context-menu id="ctxMenuExample" ref="ctxMenu">
        <button type="button" class="dropdown-item" @click="clicked('Option 1')">Option 1</button>
        <button type="button" class="dropdown-item disabled">Option 2</button>
        <button type="button" class="dropdown-item" @click="clicked('Option 3')">Option 3</button>
      </context-menu>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-context-menu/vue-context-menu.scss" lang="scss"></style>

<script>
import contextMenu from 'vue-context-menu'

export default {
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
