<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Progress bars
    </h4>

    <b-card no-body class="mb-4">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Default</div>

        <b-progress :value="60" height="0.75rem" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Height</div>

        <b-progress :value="60" height="0.25rem" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">With label</div>

        <b-progress :value="30" show-progress height="0.75rem" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Variations</div>

        <div class="demo-vertical-spacing-sm">
          <b-progress variant="secondary" :value="30" height="0.75rem" />
          <b-progress variant="success" :value="40" height="0.75rem" />
          <b-progress variant="info" :value="20" height="0.75rem" />
          <b-progress variant="warning" :value="60" height="0.75rem" />
          <b-progress variant="danger" :value="80" height="0.75rem" />
          <b-progress variant="dark" :value="50" height="0.75rem" />
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Striped</div>

        <div class="demo-vertical-spacing-sm">
          <b-progress striped :value="45" height="0.75rem" />
          <b-progress variant="secondary" striped :value="30" height="0.75rem" />
          <b-progress variant="success" striped :value="40" height="0.75rem" />
          <b-progress variant="info" striped :value="20" height="0.75rem" />
          <b-progress variant="warning" striped :value="60" height="0.75rem" />
          <b-progress variant="danger" striped :value="80" height="0.75rem" />
          <b-progress variant="dark" striped :value="50" height="0.75rem" />
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Animated</div>

        <div class="demo-vertical-spacing-sm">
          <b-progress striped animated :value="45" height="0.75rem" />
          <b-progress variant="secondary" striped animated :value="30" height="0.75rem" />
          <b-progress variant="success" striped animated :value="40" height="0.75rem" />
          <b-progress variant="info" striped animated :value="20" height="0.75rem" />
          <b-progress variant="warning" striped animated :value="60" height="0.75rem" />
          <b-progress variant="danger" striped animated :value="80" height="0.75rem" />
          <b-progress variant="dark" striped animated :value="50" height="0.75rem" />
        </div>
      </b-card-body>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'ui-progress-bars',
  metaInfo: {
    title: 'Progress bars - UI elements'
  }
}
</script>
