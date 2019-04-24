<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Cards</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-card title="Card title" img-top :img-src="`${baseUrl}img/bg/2.jpg`" img-alt="Card image cap" style="max-width: 20rem;">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-btn href="javascript:void(0)" variant="primary">Go somewhere</b-btn>
      </b-card>
    </div>

    <h4 class="ui-block-heading">Content types</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-card class="mb-3">
            This is some text within a card block.
          </b-card>

        </div>
        <div class="col-md">

          <b-card title="Card title" sub-title="Card subtitle" sub-title-tag="div" class="mb-3">
            <p class="card-text mt-3">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="javascript:void(0)" class="card-link">Card link</a>
            <a href="javascript:void(0)" class="card-link">Another link</a>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card img-top :img-src="`${baseUrl}img/bg/3.jpg`" img-alt="Card image cap" class="mb-3">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Mixed</h4>

    <div class="cui-example">

      <b-card no-body img-top :img-src="`${baseUrl}img/bg/4.jpg`" img-alt="Card image cap" style="max-width: 20rem;">
        <b-card-body>
          <h4 class="card-title">Card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <b-card-body>
          <a href="javascript:void(0)" class="card-link">Card link</a>
          <a href="javascript:void(0)" class="card-link">Another link</a>
        </b-card-body>
      </b-card>

    </div>

    <h4 class="ui-block-heading">Header and footer</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-card header="Featured" class="mb-3">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
          </b-card>

        </div>
        <div class="col-md">

          <b-card header="Featured" header-tag="h4" class="mb-3">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card header="Quote" class="mb-3">
            <blockquote class="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </b-card>

        </div>
        <div class="col-md">

          <b-card no-body header="Featured" class="text-center mb-3">
            <b-card-body>
              <h4 class="card-title">Special title treatment</h4>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
            </b-card-body>
            <b-card-footer class="text-muted">
              2 days ago
            </b-card-footer>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Text alignment</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-lg">

          <b-card class="mb-3">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card class="text-center mb-3">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card class="text-right mb-3">
            <h4 class="card-title">Special title treatment</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Navigation</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-card no-body class="nav-responsive-md mb-3">
            <b-tabs card class="nav-responsive-md">
              <b-tab title="Active" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Link">
                Tab Contents 2
              </b-tab>
              <b-tab title="Disabled" disabled>
                Tab Contents 3
              </b-tab>
            </b-tabs>
          </b-card>

        </div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-tabs card pills class="nav-responsive-md">
              <b-tab title="Active" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Link">
                Tab Contents 2
              </b-tab>
              <b-tab title="Disabled" disabled>
                Tab Contents 3
              </b-tab>
            </b-tabs>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading material-style-only">Light navigation (Material only)</h4>

    <div class="cui-example material-style-only">
      <div class="row">
        <div class="col-md">

          <b-card no-body bg-variant="primary" text-variant="white" class="nav-responsive-md mb-3">
            <b-tabs card class="nav-responsive-md md-tabs-light">
              <b-tab title="Active" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Link">
                Tab Contents 2
              </b-tab>
              <b-tab title="Disabled" disabled>
                Tab Contents 3
              </b-tab>
            </b-tabs>
          </b-card>

        </div>
        <div class="col-md">

          <b-card no-body bg-variant="primary" text-variant="white" class="mb-3">
            <b-tabs card pills class="nav-responsive-md md-pills-light">
              <b-tab title="Active" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Link">
                Tab Contents 2
              </b-tab>
              <b-tab title="Disabled" disabled>
                Tab Contents 3
              </b-tab>
            </b-tabs>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Images</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-lg">

          <b-card title="Card title" img-top :img-src="`${baseUrl}img/bg/5.jpg`" img-alt="Card image cap" class="mb-3">
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="card-text text-muted small">Last updated 3 mins ago</p>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card title="Card title" img-bottom :img-src="`${baseUrl}img/bg/1.jpg`" img-alt="Card image cap" class="mb-3">
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="card-text text-muted small">Last updated 3 mins ago</p>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card overlay title="Card title" :img-src="`${baseUrl}img/bg/2.jpg`" img-alt="Card image cap" text-variant="white" class="border-0 mb-3">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Condenced</h4>

    <div class="cui-example">
      <b-card no-body img-top :img-src="`${baseUrl}img/bg/3.jpg`" img-alt="Card image cap" class="card-condenced" style="max-width: 20rem;">
        <b-card-body>
          <h4 class="card-title">Card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <b-card-body>
          <a href="javascript:void(0)" class="card-link">Card link</a>
          <a href="javascript:void(0)" class="card-link">Another link</a>
        </b-card-body>
      </b-card>
    </div>

    <h4 class="ui-block-heading">Style variations</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-card bg-variant="primary" text-variant="white" header="Header" title="Primary card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="secondary" text-variant="white" header="Header" title="Secondary card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="success" text-variant="white" header="Header" title="Success card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card bg-variant="danger" text-variant="white" header="Header" title="Danger card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="warning" text-variant="dark" header="Header" title="Warning card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="info" text-variant="white" header="Header" title="Info card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card bg-variant="dark" text-variant="white" header="Header" title="Dark card title" class="mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
      </div>

      <!-- Outline -->
      <div class="row">
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="primary" title="Primary card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="secondary" title="Secondary card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="success" title="Success card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="danger" title="Danger card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="warning" title="Warning card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="info" title="Info card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card bg-variant="transparent" border-variant="dark" title="Dark card title" class="mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Hover cards</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-lg">

          <b-card title="Card title" class="card-hover mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card bg-variant="primary" text-variant="white" title="Card title" class="card-hover mb-3">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
        <div class="col-lg">

          <b-card bg-variant="transparent" border-variant="primary" title="Card title" class="card-hover mb-3 box-shadow-none">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">With elements</h4>

    <div class="cui-example">
      <div class="row">
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-card-header class="with-elements">
              <span class="card-header-title mr-2">Card header</span>
              <div class="card-header-elements">
                <b-badge variant="outline-success">20</b-badge>
                <b-badge pill variant="primary">12</b-badge>
              </div>
              <div class="card-header-elements ml-md-auto">
                <b-badge variant="outline-success">20</b-badge>
                <b-badge pill variant="primary">12</b-badge>
              </div>
            </b-card-header>
            <b-card-body>
              <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
            </b-card-body>
          </b-card>

        </div>
        <div class="col-md">

          <b-card class="mb-3">
            <div class="card-title with-elements">
              <h5 class="m-0 mr-2">Card title</h5>
              <div class="card-title-elements">
                <span class="badge badge-outline-success">20</span>
                <span class="badge badge-primary badge-pill">12</span>
              </div>
              <div class="card-title-elements ml-md-auto">
                <span class="badge badge-outline-success">20</span>
                <span class="badge badge-primary badge-pill">12</span>
              </div>
            </div>
            <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-card-header class="with-elements">
              <span class="card-header-title mr-2">Card header</span>
              <div class="card-header-elements">
                <b-btn variant="outline-primary" class="btn-xs"><span class="ion ion-md-add"></span> Add</b-btn>
                <b-btn variant="success" class="btn-xs icon-btn"><span class="ion ion-md-cloud-download"></span></b-btn>
              </div>
              <div class="card-header-elements ml-md-auto">
                <b-btn variant="outline-primary" class="btn-xs"><span class="ion ion-md-add"></span> Add</b-btn>
                <b-btn variant="success" class="btn-xs icon-btn"><span class="ion ion-md-cloud-download"></span></b-btn>
              </div>
            </b-card-header>
            <b-card-body>
              <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
            </b-card-body>
          </b-card>

        </div>
        <div class="col-md">

          <b-card class="mb-3">
            <div class="card-title with-elements">
              <h5 class="m-0 mr-2">Card title</h5>
              <div class="card-title-elements">
                <b-btn variant="outline-primary" class="btn-xs"><span class="ion ion-md-add"></span> Add</b-btn>
                <b-btn variant="success" class="btn-xs icon-btn"><span class="ion ion-md-cloud-download"></span></b-btn>
              </div>
              <div class="card-title-elements ml-md-auto">
                <b-btn variant="outline-primary" class="btn-xs"><span class="ion ion-md-add"></span> Add</b-btn>
                <b-btn variant="success" class="btn-xs icon-btn"><span class="ion ion-md-cloud-download"></span></b-btn>
              </div>
            </div>
            <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-card-header class="with-elements">
              <span class="card-header-title mr-2">Card header</span>
              <div class="card-header-elements">
                <b-select size="sm" :options="[1,2,3]" :value="1" class="w-auto" />
                <b-input size="sm" placeholder="Search" style="width:50px" />
                <label class="switcher switcher-sm mr-0">
                  <input type="checkbox" class="switcher-input">
                  <span class="switcher-indicator">
                    <span class="switcher-yes"></span>
                    <span class="switcher-no"></span>
                  </span>
                </label>
              </div>
              <div class="card-header-elements ml-md-auto">
                <b-select size="sm" :options="[1,2,3]" :value="1" class="w-auto" />
                <b-input size="sm" placeholder="Search" style="width:50px" />
                <label class="switcher switcher-sm mr-0">
                  <input type="checkbox" class="switcher-input">
                  <span class="switcher-indicator">
                    <span class="switcher-yes"></span>
                    <span class="switcher-no"></span>
                  </span>
                </label>
              </div>
            </b-card-header>
            <b-card-body>
              <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
            </b-card-body>
          </b-card>

        </div>
        <div class="col-md">

          <b-card class="mb-3">
            <div class="card-title with-elements">
              <h5 class="m-0 mr-2">Card title</h5>
              <div class="card-title-elements">
                <b-select size="sm" :options="[1,2,3]" :value="1" class="w-auto" />
                <b-input size="sm" placeholder="Search" style="width:50px" />
                <label class="switcher switcher-sm mr-0">
                  <input type="checkbox" class="switcher-input">
                  <span class="switcher-indicator">
                    <span class="switcher-yes"></span>
                    <span class="switcher-no"></span>
                  </span>
                </label>
              </div>
              <div class="card-title-elements ml-md-auto">
                <b-select size="sm" :options="[1,2,3]" :value="1" class="w-auto" />
                <b-input size="sm" placeholder="Search" style="width:50px" />
                <label class="switcher switcher-sm mr-0">
                  <input type="checkbox" class="switcher-input">
                  <span class="switcher-indicator">
                    <span class="switcher-yes"></span>
                    <span class="switcher-no"></span>
                  </span>
                </label>
              </div>
            </div>
            <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-card-header class="with-elements">
              <span class="card-header-title mr-2">Card header</span>
              <div class="card-header-elements">
                <span class="text text-muted"><small>Some TEXT</small></span>
                <span class="ion ion-md-star"></span>
              </div>
              <div class="card-header-elements ml-md-auto">
                <span class="text text-muted"><small>Some TEXT</small></span>
                <span class="ion ion-md-star"></span>
              </div>
            </b-card-header>
            <b-card-body>
              <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
            </b-card-body>
          </b-card>

        </div>
        <div class="col-md">

          <b-card class="mb-3">
            <div class="card-title with-elements">
              <h5 class="m-0 mr-2">Card title</h5>
              <div class="card-title-elements">
                <span class="text text-muted"><small>Some TEXT</small></span>
                <span class="ion ion-md-star"></span>
              </div>
              <div class="card-title-elements ml-md-auto">
                <span class="text text-muted"><small>Some TEXT</small></span>
                <span class="ion ion-md-star"></span>
              </div>
            </div>
            <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
          </b-card>

        </div>
        <div class="w-100"></div>
        <div class="col-md">

          <b-card no-body class="mb-3">
            <b-card-header class="with-elements">
              <span class="card-header-title mr-2">Card header</span>
              <div class="card-header-elements">
                <b-pagination size="sm" :total-rows="1" :per-page="1" hide-goto-end-buttons class="m-0" />
                <b-progress :value="60" height="6px" animated style="width: 50px"></b-progress>
              </div>
              <div class="card-header-elements ml-md-auto">
                <b-pagination size="sm" :total-rows="1" :per-page="1" hide-goto-end-buttons class="m-0" />
                <b-progress :value="60" height="6px" animated style="width: 50px"></b-progress>
              </div>
            </b-card-header>
            <b-card-body>
              <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
            </b-card-body>
          </b-card>

        </div>
        <div class="col-md">

          <b-card class="mb-3">
            <div class="card-title with-elements">
              <h5 class="m-0 mr-2">Card title</h5>
              <div class="card-title-elements">
                <b-pagination size="sm" :total-rows="1" :per-page="1" hide-goto-end-buttons class="m-0" />
                <b-progress :value="60" height="6px" animated style="width: 50px"></b-progress>
              </div>
              <div class="card-title-elements ml-md-auto">
                <b-pagination size="sm" :total-rows="1" :per-page="1" hide-goto-end-buttons class="m-0" />
                <b-progress :value="60" height="6px" animated style="width: 50px"></b-progress>
              </div>
            </div>
            <p class="card-text">Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</p>
          </b-card>

        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Card groups</h4>

    <div class="cui-example">
      <b-card-group>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/4.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/5.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/1.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
      </b-card-group>
    </div>

    <h4 class="ui-block-heading">Card decks</h4>

    <div class="cui-example">
      <b-card-group deck>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/2.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/3.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
        <b-card no-body img-top :img-src="`${baseUrl}img/bg/4.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>
      </b-card-group>
    </div>

    <h4 class="ui-block-heading">Card columns</h4>

    <div class="cui-example">
      <b-card-group columns>
        <b-card img-top :img-src="`${baseUrl}img/bg/5.jpg`" img-alt="Card image cap" class="mb-3">
          <h4 class="card-title">Card title</h4>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </b-card>

        <b-card class="mb-3">
          <blockquote class="blockquote m-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
          </blockquote>
        </b-card>

        <b-card no-body img-top :img-src="`${baseUrl}img/bg/1.jpg`" img-alt="Card image cap" class="mb-3">
          <b-card-body>
            <h4 class="card-title">Card title</h4>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-body>
          <b-card-footer class="text-muted small">Last updated 3 mins ago</b-card-footer>
        </b-card>

        <b-card bg-variant="primary" text-variant="white" class="card-condenced text-center mb-3">
          <blockquote class="blockquote m-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-white opacity-75">Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
          </blockquote>
        </b-card>

        <b-card title="Card title" class="text-center mb-3">
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </b-card>

        <b-card overlay :img-src="`${baseUrl}img/bg/2.jpg`" img-alt="Card image cap" class="border-0 mb-3" />

        <b-card class="card-condenced text-right mb-3">
          <blockquote class="blockquote m-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
          </blockquote>
        </b-card>

        <b-card title="Card title" class="mb-3">
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {}
</script>
