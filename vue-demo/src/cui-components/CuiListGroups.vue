<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">List groups</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
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
    </div>

    <h4 class="ui-block-heading">Linked items</h4>

    <div class="cui-example">
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
    </div>

    <h4 class="ui-block-heading">Contextual classes</h4>

    <div class="cui-example">
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
    </div>

    <h4 class="ui-block-heading">Custom content</h4>

    <div class="cui-example">
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
    </div>
  </div>
</template>

<script>
export default {}
</script>
