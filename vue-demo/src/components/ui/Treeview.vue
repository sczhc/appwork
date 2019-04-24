<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Treeview
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Vue Jstree</h5>

    <v-jstree
      :data="treeData"
      :class="{ 'tree-rtl': isRTL }"
      show-checkbox
      multiple
      allow-batch
      whole-row
      draggable
      @item-click="itemClick" />

    <pre class="mt-4" style="white-space: normal;direction:ltr;text-align:left">{{ treeDataJson }}</pre>

  </div>
</template>

<style src="@/vendor/libs/vue-jstree/vue-jstree.scss" lang="scss"></style>

<script>
import VJstree from 'vue-jstree'

export default {
  name: 'ui-treeview',
  metaInfo: {
    title: 'Treeview - UI elements'
  },
  components: {
    VJstree
  },
  data: () => ({
    treeData: [{
      'text': 'Same but with checkboxes',
      'children': [{
        'text': 'initially selected',
        'selected': true
      }, {
        'text': 'custom icon',
        'icon': 'ion ion-md-warning icon-state-danger'
      }, {
        'text': 'initially open',
        'icon': 'ion ion-ios-folder icon-state-default',
        'opened': true,
        'children': [{
          'text': 'Another node'
        }]
      }, {
        'text': 'custom icon',
        'icon': 'ion ion-md-warning icon-state-warning'
      }, {
        'text': 'disabled node',
        'icon': 'ion ion-md-checkmark icon-state-success',
        'disabled': true
      }]
    }, {
      'text': 'Same but with checkboxes',
      'opened': true,
      'children': [{
        'text': 'initially selected',
        'selected': true
      }, {
        'text': 'custom icon',
        'icon': 'ion ion-md-warning icon-state-danger'
      }, {
        'text': 'initially open',
        'icon': 'ion ion-ios-folder icon-state-default',
        'opened': true,
        'children': [{
          'text': 'Another node'
        }]
      }, {
        'text': 'custom icon',
        'icon': 'ion ion-md-warning icon-state-warning'
      }, {
        'text': 'disabled node',
        'icon': 'ion ion-md-checkmark icon-state-success',
        'disabled': true
      }]
    }, {
      'text': 'And wholerow selection'
    }]
  }),
  computed: {
    treeDataJson () {
      return JSON.stringify(this.treeData)
    }
  },
  methods: {
    itemClick (node) {
      console.log(node.model.text + ' clicked !')

      // Trigger model update by clonning data
      this.treeData = this.treeData.slice(0)
    }
  }
}
</script>
