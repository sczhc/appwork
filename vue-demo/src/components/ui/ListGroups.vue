<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> List groups
    </h4>

    <b-card no-body header="Progress bars" header-tag="h6" class="mb-4">
      <b-card-body class="card-body">
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in <span class="badge badge-default">14</span>
          </b-list-group-item>
          <b-list-group-item disabled>
            Cras justo odio
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Morbi leo risus <span class="badge badge-success">22</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Porta ac consectetur ac <span class="badge badge-danger badge-pill">13</span>
          </b-list-group-item>
          <b-list-group-item>
            Vestibulum at eros
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Linked items</div>

        <b-list-group>
          <b-list-group-item href="javascript:void(0)" active>
            Dapibus ac facilisis in
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            Cras justo odio
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            Morbi leo risus
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            Porta ac consectetur ac
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            Vestibulum at eros
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Contextual classes</div>

        <b-list-group>
          <b-list-group-item variant="primary" href="javascript:void(0)">
            This is a primary list group item
          </b-list-group-item>
          <b-list-group-item variant="secondary" href="javascript:void(0)">
            This is a secondary list group item
          </b-list-group-item>
          <b-list-group-item variant="success" href="javascript:void(0)">
            This is a success list group item
          </b-list-group-item>
          <b-list-group-item variant="danger" href="javascript:void(0)">
            This is a danger list group item
          </b-list-group-item>
          <b-list-group-item variant="warning" href="javascript:void(0)">
            This is a warning list group item
          </b-list-group-item>
          <b-list-group-item variant="info" href="javascript:void(0)">
            This is an info list group item
          </b-list-group-item>
          <b-list-group-item variant="dark" href="javascript:void(0)">
            This is a dark list group item
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="card-body">
        <div class="text-light small font-weight-semibold mb-3">Custom content</div>

        <b-list-group>
          <b-list-group-item href="javascript:void(0)" active>
            <div class="d-flex justify-content-between w-100">
              <h4 class="mb-1">List group item heading</h4>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            <div class="d-flex justify-content-between w-100">
              <h4 class="mb-1">List group item heading</h4>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0)">
            <div class="d-flex justify-content-between w-100">
              <h4 class="mb-1">List group item heading</h4>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'ui-list-groups',
  metaInfo: {
    title: 'List groups - UI elements'
  }
}
</script>
