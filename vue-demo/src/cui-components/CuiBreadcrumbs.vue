<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Breadcrumbs</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-breadcrumb :items="items1"/>
      <b-breadcrumb :items="items2"/>
      <b-breadcrumb :items="items3"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items1: [{ text: 'Admin', active: true }],
    items2: [{ text: 'Admin', href: '#' }, { text: 'Manage', active: true }],
    items3: [{ text: 'Admin', href: '#' }, { text: 'Manage', href: '#' }, { text: 'Library', active: true }]
  })
}
</script>
