<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Buttons
    </h4>

    <div class="row">
      <div class="col-lg-12">

        <b-card no-body class="mb-4">
          <div class="row no-gutters row-bordered">
            <div class="col-xl-6 p-4">

              <small class="text-light font-weight-semibold">Default</small>
              <div class="demo-inline-spacing mt-3">
                <b-btn variant="primary">Primary</b-btn>
                <b-btn variant="secondary">Secondary</b-btn>
                <b-btn variant="default">Default</b-btn>
                <b-btn variant="success">Success</b-btn>
                <b-btn variant="warning">Warning</b-btn>
                <b-btn variant="info">Info</b-btn>
                <b-btn variant="danger">Danger</b-btn>
                <b-btn variant="dark">Dark</b-btn>
                <b-btn variant="link">Link</b-btn>
              </div>

            </div>
            <div class="col-xl-6 p-4">

              <small class="text-light font-weight-semibold">Rounded</small>
              <div class="demo-inline-spacing mt-3">
                <b-btn variant="primary btn-round">Primary</b-btn>
                <b-btn variant="secondary btn-round">Secondary</b-btn>
                <b-btn variant="default btn-round">Default</b-btn>
                <b-btn variant="success btn-round">Success</b-btn>
                <b-btn variant="warning btn-round">Warning</b-btn>
                <b-btn variant="info btn-round">Info</b-btn>
                <b-btn variant="danger btn-round">Danger</b-btn>
                <b-btn variant="dark btn-round">Dark</b-btn>
              </div>

            </div>
            <div class="col-xl-6 p-4">

              <small class="text-light font-weight-semibold">Outline</small>
              <div class="demo-inline-spacing mt-3">
                <b-btn variant="outline-primary">Primary</b-btn>
                <b-btn variant="outline-secondary">Secondary</b-btn>
                <b-btn variant="outline-default">Default</b-btn>
                <b-btn variant="outline-success">Success</b-btn>
                <b-btn variant="outline-warning">Warning</b-btn>
                <b-btn variant="outline-info">Info</b-btn>
                <b-btn variant="outline-danger">Danger</b-btn>
                <b-btn variant="outline-dark">Dark</b-btn>
              </div>

            </div>
            <div class="col-xl-6 p-4">

              <small class="text-light font-weight-semibold">Rounded outline</small>
              <div class="demo-inline-spacing mt-3">
                <b-btn variant="outline-primary btn-round">Primary</b-btn>
                <b-btn variant="outline-secondary btn-round">Secondary</b-btn>
                <b-btn variant="outline-default btn-round">Default</b-btn>
                <b-btn variant="outline-success btn-round">Success</b-btn>
                <b-btn variant="outline-warning btn-round">Warning</b-btn>
                <b-btn variant="outline-info btn-round">Info</b-btn>
                <b-btn variant="outline-danger btn-round">Danger</b-btn>
                <b-btn variant="outline-dark btn-round">Dark</b-btn>
              </div>

            </div>
          </div>
        </b-card>

      </div>
      <div class="material-style-only col-12">

        <b-card no-body header="Flat (Material only)" header-tag="h6" class="mb-4">
          <b-card-body class="demo-inline-spacing">
            <b-btn variant="primary md-btn-flat">Primary</b-btn>
            <b-btn variant="secondary md-btn-flat">Secondary</b-btn>
            <b-btn variant="default md-btn-flat">Default</b-btn>
            <b-btn variant="success md-btn-flat">Success</b-btn>
            <b-btn variant="warning md-btn-flat">Warning</b-btn>
            <b-btn variant="info md-btn-flat">Info</b-btn>
            <b-btn variant="danger md-btn-flat">Danger</b-btn>
            <b-btn variant="dark md-btn-flat">Dark</b-btn>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="Sizes" header-tag="h6" class="mb-4">
          <b-card-body>
            <small class="text-light font-weight-semibold">Extra large</small>
            <div class="demo-paragraph-spacing mt-3">
              <p>
                <b-btn variant="primary btn-xl">Primary</b-btn>
                <b-btn variant="secondary btn-xl">Secondary</b-btn>
                <b-btn variant="default btn-xl">Default</b-btn>
                <b-btn variant="success btn-xl">Success</b-btn>
                <b-btn variant="warning btn-xl">Warning</b-btn>
                <b-btn variant="info btn-xl">Info</b-btn>
                <b-btn variant="danger btn-xl">Danger</b-btn>
                <b-btn variant="dark btn-xl">Dark</b-btn>
              </p>

              <!-- Outline -->
              <p>
                <b-btn variant="outline-primary btn-xl">Primary</b-btn>
                <b-btn variant="outline-secondary btn-xl">Secondary</b-btn>
                <b-btn variant="outline-default btn-xl">Default</b-btn>
                <b-btn variant="outline-success btn-xl">Success</b-btn>
                <b-btn variant="outline-warning btn-xl">Warning</b-btn>
                <b-btn variant="outline-info btn-xl">Info</b-btn>
                <b-btn variant="outline-danger btn-xl">Danger</b-btn>
                <b-btn variant="outline-dark btn-xl">Dark</b-btn>
              </p>
            </div>
          </b-card-body>
          <hr class="m-0">
          <b-card-body>
            <small class="text-light font-weight-semibold">Large</small>
            <div class="demo-paragraph-spacing mt-3">
              <p>
                <b-btn size="lg" variant="primary">Primary</b-btn>
                <b-btn size="lg" variant="secondary">Secondary</b-btn>
                <b-btn size="lg" variant="default">Default</b-btn>
                <b-btn size="lg" variant="success">Success</b-btn>
                <b-btn size="lg" variant="warning">Warning</b-btn>
                <b-btn size="lg" variant="info">Info</b-btn>
                <b-btn size="lg" variant="danger">Danger</b-btn>
                <b-btn size="lg" variant="dark">Dark</b-btn>
              </p>

              <!-- Outline -->
              <p>
                <b-btn size="lg" variant="outline-primary">Primary</b-btn>
                <b-btn size="lg" variant="outline-secondary">Secondary</b-btn>
                <b-btn size="lg" variant="outline-default">Default</b-btn>
                <b-btn size="lg" variant="outline-success">Success</b-btn>
                <b-btn size="lg" variant="outline-warning">Warning</b-btn>
                <b-btn size="lg" variant="outline-info">Info</b-btn>
                <b-btn size="lg" variant="outline-danger">Danger</b-btn>
                <b-btn size="lg" variant="outline-dark">Dark</b-btn>
              </p>
            </div>
          </b-card-body>
          <hr class="m-0">
          <b-card-body>
            <small class="text-light font-weight-semibold">Small</small>
            <div class="demo-paragraph-spacing mt-3">
              <p>
                <b-btn size="sm" variant="primary">Primary</b-btn>
                <b-btn size="sm" variant="secondary">Secondary</b-btn>
                <b-btn size="sm" variant="default">Default</b-btn>
                <b-btn size="sm" variant="success">Success</b-btn>
                <b-btn size="sm" variant="warning">Warning</b-btn>
                <b-btn size="sm" variant="info">Info</b-btn>
                <b-btn size="sm" variant="danger">Danger</b-btn>
                <b-btn size="sm" variant="dark">Dark</b-btn>
              </p>

              <!-- Outline -->
              <p>
                <b-btn size="sm" variant="outline-primary">Primary</b-btn>
                <b-btn size="sm" variant="outline-secondary">Secondary</b-btn>
                <b-btn size="sm" variant="outline-default">Default</b-btn>
                <b-btn size="sm" variant="outline-success">Success</b-btn>
                <b-btn size="sm" variant="outline-warning">Warning</b-btn>
                <b-btn size="sm" variant="outline-info">Info</b-btn>
                <b-btn size="sm" variant="outline-danger">Danger</b-btn>
                <b-btn size="sm" variant="outline-dark">Dark</b-btn>
              </p>
            </div>
          </b-card-body>
          <hr class="m-0">
          <b-card-body>
            <small class="text-light font-weight-semibold">Extra small</small>
            <div class="demo-paragraph-spacing mt-3">
              <p>
                <b-btn variant="primary btn-xs">Primary</b-btn>
                <b-btn variant="secondary btn-xs">Secondary</b-btn>
                <b-btn variant="default btn-xs">Default</b-btn>
                <b-btn variant="success btn-xs">Success</b-btn>
                <b-btn variant="warning btn-xs">Warning</b-btn>
                <b-btn variant="info btn-xs">Info</b-btn>
                <b-btn variant="danger btn-xs">Danger</b-btn>
                <b-btn variant="dark btn-xs">Dark</b-btn>
              </p>

              <!-- Outline -->
              <p>
                <b-btn variant="outline-primary btn-xs">Primary</b-btn>
                <b-btn variant="outline-secondary btn-xs">Secondary</b-btn>
                <b-btn variant="outline-default btn-xs">Default</b-btn>
                <b-btn variant="outline-success btn-xs">Success</b-btn>
                <b-btn variant="outline-warning btn-xs">Warning</b-btn>
                <b-btn variant="outline-info btn-xs">Info</b-btn>
                <b-btn variant="outline-danger btn-xs">Danger</b-btn>
                <b-btn variant="outline-dark btn-xs">Dark</b-btn>
              </p>
            </div>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="With icon" header-tag="h6" class="mb-4">
          <b-card-body class="demo-inline-spacing">
            <b-btn size="lg" variant="primary"><span class="far fa-paper-plane"></span>&nbsp;&nbsp;Primary</b-btn>
            <b-btn size="lg" variant="secondary"><span class="oi oi-cloud-download"></span>&nbsp;&nbsp;Secondary</b-btn>
            <b-btn size="lg" variant="default"><span class="pe-7s-users"></span>&nbsp;&nbsp;Default</b-btn>
            <b-btn size="lg" variant="success"><span class="ion ion-md-bulb"></span>&nbsp;&nbsp;Success</b-btn>
            <b-btn size="lg" variant="warning"><span class="lnr lnr-map"></span>&nbsp;&nbsp;Warning</b-btn>
            <b-btn size="lg" variant="info"><span class="far fa-paper-plane"></span>&nbsp;&nbsp;Info</b-btn>
            <b-btn size="lg" variant="danger"><span class="oi oi-cloud-download"></span>&nbsp;&nbsp;Danger</b-btn>
            <b-btn size="lg" variant="dark"><span class="pe-7s-users"></span>&nbsp;&nbsp;Dark</b-btn>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="Icon-buttons" header-tag="h6" class="mb-4">
          <b-card-body class="demo-paragraph-spacing">
            <!-- Extra-large -->
            <p>
              <b-btn variant="outline-primary icon-btn btn-xl"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-secondary icon-btn btn-xl"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-default icon-btn btn-xl"><span class="pe-7s-users"></span></b-btn>
              <b-btn variant="outline-success icon-btn btn-xl"><span class="ion ion-md-bulb"></span></b-btn>
              <b-btn variant="outline-warning icon-btn btn-xl"><span class="lnr lnr-map"></span></b-btn>
              <b-btn variant="outline-info icon-btn btn-xl"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-danger icon-btn btn-xl"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-dark icon-btn btn-xl"><span class="pe-7s-users"></span></b-btn>
            </p>

            <!-- Large -->
            <p>
              <b-btn size="lg" variant="outline-primary icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn size="lg" variant="outline-secondary icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn size="lg" variant="outline-default icon-btn"><span class="pe-7s-users"></span></b-btn>
              <b-btn size="lg" variant="outline-success icon-btn"><span class="ion ion-md-bulb"></span></b-btn>
              <b-btn size="lg" variant="outline-warning icon-btn"><span class="lnr lnr-map"></span></b-btn>
              <b-btn size="lg" variant="outline-info icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn size="lg" variant="outline-danger icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn size="lg" variant="outline-dark icon-btn"><span class="pe-7s-users"></span></b-btn>
            </p>

            <!-- Default -->
            <p>
              <b-btn variant="outline-primary icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-secondary icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-default icon-btn"><span class="pe-7s-users"></span></b-btn>
              <b-btn variant="outline-success icon-btn"><span class="ion ion-md-bulb"></span></b-btn>
              <b-btn variant="outline-warning icon-btn"><span class="lnr lnr-map"></span></b-btn>
              <b-btn variant="outline-info icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-danger icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-dark icon-btn"><span class="pe-7s-users"></span></b-btn>
            </p>

            <!-- Small -->
            <p>
              <b-btn size="sm" variant="outline-primary icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn size="sm" variant="outline-secondary icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn size="sm" variant="outline-default icon-btn"><span class="pe-7s-users"></span></b-btn>
              <b-btn size="sm" variant="outline-success icon-btn"><span class="ion ion-md-bulb"></span></b-btn>
              <b-btn size="sm" variant="outline-warning icon-btn"><span class="lnr lnr-map"></span></b-btn>
              <b-btn size="sm" variant="outline-info icon-btn"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn size="sm" variant="outline-danger icon-btn"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn size="sm" variant="outline-dark icon-btn"><span class="pe-7s-users"></span></b-btn>
            </p>

            <!-- Extra-small -->
            <p>
              <b-btn variant="outline-primary icon-btn btn-xs"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-secondary icon-btn btn-xs"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-default icon-btn btn-xs"><span class="pe-7s-users"></span></b-btn>
              <b-btn variant="outline-success icon-btn btn-xs"><span class="ion ion-md-bulb"></span></b-btn>
              <b-btn variant="outline-warning icon-btn btn-xs"><span class="lnr lnr-map"></span></b-btn>
              <b-btn variant="outline-info icon-btn btn-xs"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn variant="outline-danger icon-btn btn-xs"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-dark icon-btn btn-xs"><span class="pe-7s-users"></span></b-btn>
            </p>
          </b-card-body>
          <hr class="m-0">
          <b-card-body>
            <small class="text-light font-weight-semibold">Borderless</small>
            <div class="demo-inline-spacing mt-3">
              <b-btn variant="outline-primary icon-btn btn-xl borderless"><span class="far fa-paper-plane"></span></b-btn>
              <b-btn size="lg" variant="outline-secondary icon-btn borderless"><span class="oi oi-cloud-download"></span></b-btn>
              <b-btn variant="outline-success icon-btn borderless"><span class="pe-7s-users"></span></b-btn>
              <b-btn size="sm" variant="outline-info icon-btn borderless"><span class="lnr lnr-map"></span></b-btn>
              <b-btn variant="outline-warning icon-btn btn-xs borderless"><span class="ion ion-md-bulb"></span></b-btn>
            </div>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-12">

        <b-card no-body header="Toggle" header-tag="h6" class="mb-4">
          <div class="row row-bordered no-gutters">
            <div class="col-xl-6 p-4">
              <div class="text-light small font-weight-semibold mb-3">Single</div>

              <b-btn variant="primary" :pressed.sync="singleToggle">
                Single toggle
              </b-btn>

              <pre class="mt-4">{{ singleToggle }}</pre>
            </div>
            <div class="col-xl-6 p-4">
              <div class="text-light small font-weight-semibold mb-3">Multiple toggle</div>

              <div class="demo-vertical-spacing-sm">
                <!-- Checkbox -->
                <b-btn-group>
                  <b-btn variant="primary" :pressed.sync="multipleToggle.first">Toggle 1 (pre-checked)</b-btn>
                  <b-btn variant="primary" :pressed.sync="multipleToggle.second">Toggle 2</b-btn>
                  <b-btn variant="primary" :pressed.sync="multipleToggle.third">Toggle 3</b-btn>
                </b-btn-group>

                <pre>{{ multipleToggle }}</pre>
              </div>
            </div>
          </div>
        </b-card>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-buttons',
  metaInfo: {
    title: 'Buttons - UI elements'
  },
  data: () => ({
    singleToggle: true,
    multipleToggle: {
      first: true,
      second: false,
      third: false
    }
  })
}
</script>
