<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Badges
    </h4>

    <div class="bg-lighter rounded p-4 mb-4 clearfix">
      <h1>Example heading
        <b-badge variant="default">New</b-badge>
      </h1>
      <h2>Example heading
        <b-badge variant="default">New</b-badge>
      </h2>
      <h3>Example heading
        <b-badge variant="default">New</b-badge>
      </h3>
      <h4>Example heading
        <b-badge variant="default">New</b-badge>
      </h4>
      <h5>Example heading
        <b-badge variant="default">New</b-badge>
      </h5>
      <h6>Example heading
        <b-badge variant="default">New</b-badge>
      </h6>
    </div>

    <div class="row">
      <div class="col-12">

        <b-card no-body header="Variations" header-tag="h6" class="mb-4">
          <div class="row row-bordered no-gutters">
            <div class="col-xl-4 p-4">
              <div class="text-light small font-weight-semibold mb-3">Default</div>

              <div class="demo-inline-spacing">
                <b-badge href="javascript:void(0)" variant="default">Default</b-badge>
                <b-badge href="javascript:void(0)" variant="primary">Primary</b-badge>
                <b-badge href="javascript:void(0)" variant="secondary">Secondary</b-badge>
                <b-badge href="javascript:void(0)" variant="success">Success</b-badge>
                <b-badge href="javascript:void(0)" variant="info">Info</b-badge>
                <b-badge href="javascript:void(0)" variant="warning">Warning</b-badge>
                <b-badge href="javascript:void(0)" variant="danger">Danger</b-badge>
                <b-badge href="javascript:void(0)" variant="dark">Dark</b-badge>
              </div>
            </div>
            <div class="col-xl-4 p-4">
              <div class="text-light small font-weight-semibold mb-3">Pills</div>

              <div class="demo-inline-spacing">
                <b-badge href="javascript:void(0)" pill variant="default">Default</b-badge>
                <b-badge href="javascript:void(0)" pill variant="primary">Primary</b-badge>
                <b-badge href="javascript:void(0)" pill variant="secondary">Secondary</b-badge>
                <b-badge href="javascript:void(0)" pill variant="success">Success</b-badge>
                <b-badge href="javascript:void(0)" pill variant="info">Info</b-badge>
                <b-badge href="javascript:void(0)" pill variant="warning">Warning</b-badge>
                <b-badge href="javascript:void(0)" pill variant="danger">Danger</b-badge>
                <b-badge href="javascript:void(0)" pill variant="dark">Dark</b-badge>
              </div>
            </div>
            <div class="col-xl-4 p-4">
              <div class="text-light small font-weight-semibold mb-3">Outline</div>

              <div class="demo-inline-spacing">
                <b-badge href="javascript:void(0)" variant="outline-default">Default</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-primary">Primary</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-secondary">Secondary</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-success">Success</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-info">Info</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-warning">Warning</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-danger">Danger</b-badge>
                <b-badge href="javascript:void(0)" variant="outline-dark">Dark</b-badge>
              </div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="Button badges" header-tag="h6" class="mb-4">
          <b-card-body class="demo-paragraph-spacing">
            <p>
              <b-btn variant="primary">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="secondary">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="default">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="success">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="warning">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="info">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="danger">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="dark">Messages <b-badge variant="light">4</b-badge></b-btn>
            </p>
            <p>
              <b-btn variant="outline-primary">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-secondary">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-default">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-success">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-warning">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-info">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-danger">Messages <b-badge variant="light">4</b-badge></b-btn>
              <b-btn variant="outline-dark">Messages <b-badge variant="light">4</b-badge></b-btn>
            </p>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card header="Dots" header-tag="h6" class="mb-4">
          <b-badge variant="default badge-dot"></b-badge> Default&nbsp;&nbsp;
          <b-badge variant="primary badge-dot"></b-badge> Primary&nbsp;&nbsp;
          <b-badge variant="success badge-dot"></b-badge> Success&nbsp;&nbsp;
          <b-badge variant="info badge-dot"></b-badge> Info&nbsp;&nbsp;
          <b-badge variant="warning badge-dot"></b-badge> Warning&nbsp;&nbsp;
          <b-badge variant="danger badge-dot"></b-badge> Danger
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="Indicators" header-tag="h6" class="mb-4">
          <b-card-body class="demo-inline-spacing">
            <b-btn variant="default">Badge <b-badge variant="primary indicator">12</b-badge></b-btn>
            <b-btn variant="default">Outlined badge <b-badge variant="outline-success indicator">12</b-badge></b-btn>
            <b-btn variant="default">Pill <b-badge pill variant="info indicator">12</b-badge></b-btn>
            <b-btn variant="default">Outlined pill <b-badge pill variant="outline-danger indicator">12</b-badge></b-btn>
            <b-btn variant="default">Dot <b-badge variant="danger badge-dot indicator"></b-badge></b-btn>
            <b-btn variant="default">Outlined dot <b-badge variant="outline-success badge-dot indicator"></b-badge></b-btn>
          </b-card-body>
        </b-card>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-badges',
  metaInfo: {
    title: 'Badges - UI elements'
  }
}
</script>
