<template>
  <div class="d-flex align-items-stretch flex-grow-1">
    <div class="w-25 bg-light container-p-x container-p-y">
      Side box
    </div>

    <div class="flex-grow-1 container-p-x container-p-y">
      <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Layouts /</span> Layout 2 (Flex)
      </h4>

      <div class="layout-example-block layout-example-block-2">
        <code>.layout-wrapper.layout-2</code>

        <div class="layout-example-block">
          <code>.layout-inner</code>

          <div class="layout-example-block-inner">

            <div class="layout-example-block layout-example-block-sidenav">
              <code>.layout-sidenav</code>
            </div>

            <div class="layout-example-block layout-example-block-container">
              <code>.layout-container</code>

              <div class="layout-example-block layout-example-block-navbar">
                <code>.layout-navbar</code>
              </div>

              <div class="layout-example-block layout-example-block-content">
                <code>.layout-content</code>

                <div class="layout-example-block bg-white">
                  <code class="text-dark">.container-fluid.d-flex.align-items-stretch</code>
                </div>
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
  name: 'layout-2-flex-example',
  metaInfo: {
    title: 'Layout 2 (Flex) - Layouts'
  }
}
</script>
