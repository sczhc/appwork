<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Layouts /</span> Layout 1
    </h4>

    <div class="layout-example-block layout-example-block-1">
      <code>.layout-wrapper.layout-1</code>

      <div class="layout-example-block">
        <code>.layout-inner</code>

        <div class="layout-example-block layout-example-block-navbar">
          <code>.layout-navbar</code>
        </div>

        <div class="layout-example-block layout-example-block-container">
          <code>.layout-container</code>

          <div class="layout-example-block-inner">

            <div class="layout-example-block layout-example-block-sidenav">
              <code>.layout-sidenav</code>
            </div>

            <div class="layout-example-block layout-example-block-content">
              <code>.layout-content</code>

              <div class="layout-example-block bg-white">
                <code class="text-dark">.container-fluid</code>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-1-example',
  metaInfo: {
    title: 'Layout 1 - Layouts'
  }
}
</script>
