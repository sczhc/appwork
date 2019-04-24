<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Navs
    </h4>

    <div class="demo-vertical-spacing-sm bg-lighter rounded p-4 mb-4 clearfix">
      <!-- Left -->
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Center -->
      <b-nav class="justify-content-center">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Right -->
      <b-nav class="justify-content-end">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Vertical -->
      <b-nav vertical>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
      Tabs & Pills
    </h5>

    <div class="demo-vertical-spacing">
      <!-- Default tabs -->
      <b-nav tabs>
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Alt tabs -->
      <b-nav tabs class="tabs-alt">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Pills -->
      <b-nav pills>
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <div class="material-style-only">
      <h6 class="text-muted pb-1 mt-5 mb-4">Light (material only)</h6>

      <div class="demo-vertical-spacing bg-primary rounded p-4" id="nav-light-demo">
        <!-- Default tabs -->
        <b-nav tabs class="md-tabs-light">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item-dropdown text="Dropdown" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item>Separated link</b-dd-item>
          </b-nav-item-dropdown>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>

        <!-- Alt tabs -->
        <b-nav tabs class="tabs-alt md-tabs-light">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item-dropdown text="Dropdown" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item>Separated link</b-dd-item>
          </b-nav-item-dropdown>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>

        <!-- Pills -->
        <b-nav pills class="md-pills-light">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item-dropdown text="Dropdown" :right="isRTL">
            <b-dd-item>Action</b-dd-item>
            <b-dd-item>Another action</b-dd-item>
            <b-dd-divider></b-dd-divider>
            <b-dd-item>Separated link</b-dd-item>
          </b-nav-item-dropdown>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Sizes</h6>

    <div class="demo-vertical-spacing">
      <!-- Large -->
      <b-nav tabs class="nav-lg">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
      <b-nav tabs class="nav-lg tabs-alt">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
      <b-nav pills class="nav-lg">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Small -->
      <b-nav tabs class="nav-sm">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
      <b-nav tabs class="nav-sm tabs-alt">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
      <b-nav pills class="nav-sm">
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Fill & Justify</h6>

    <div class="demo-vertical-spacing">
      <b-nav pills fill>
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <b-nav pills justified>
        <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
        <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Dropdowns</h6>

    <div class="demo-vertical-spacing" id="nav-dropdowns-demo">
      <!-- Default tabs -->
      <b-nav tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item-dropdown text="Dropdown" :right="isRTL">
          <b-dd-item>Action</b-dd-item>
          <b-dd-item>Another action</b-dd-item>
          <b-dd-divider></b-dd-divider>
          <b-dd-item>Separated link</b-dd-item>
        </b-nav-item-dropdown>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Alt tabs -->
      <b-nav tabs class="tabs-alt">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item-dropdown text="Dropdown" :right="isRTL">
          <b-dd-item>Action</b-dd-item>
          <b-dd-item>Another action</b-dd-item>
          <b-dd-divider></b-dd-divider>
          <b-dd-item>Separated link</b-dd-item>
        </b-nav-item-dropdown>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <!-- Pills -->
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item-dropdown text="Dropdown" :right="isRTL">
          <b-dd-item>Action</b-dd-item>
          <b-dd-item>Another action</b-dd-item>
          <b-dd-divider></b-dd-divider>
          <b-dd-item>Separated link</b-dd-item>
        </b-nav-item-dropdown>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
      Panel tabs
    </h5>

    <div class="row">
      <div class="col-xl-6">

        <b-tabs class="nav-tabs-top mb-4">
          <b-tab title="Home" active>
            <div class="card-body">
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </div>
          </b-tab>
          <b-tab title="Profile">
            <div class="card-body">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
          </b-tab>
          <b-tab title="Messages">
            <div class="card-body">
              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
          </b-tab>
        </b-tabs>

      </div>
      <div class="col-xl-6">

        <b-tabs class="nav-tabs-bottom mb-4">
          <b-tab title="Home" active>
            <div class="card-body">
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </div>
          </b-tab>
          <b-tab title="Profile">
            <div class="card-body">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
          </b-tab>
          <b-tab title="Messages">
            <div class="card-body">
              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
          </b-tab>
        </b-tabs>

      </div>
      <div class="col-xl-6">

        <b-tabs class="nav-tabs-left mb-4">
          <b-tab title="Home" active>
            <div class="card-body">
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </div>
          </b-tab>
          <b-tab title="Profile">
            <div class="card-body">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
          </b-tab>
          <b-tab title="Messages">
            <div class="card-body">
              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
          </b-tab>
        </b-tabs>

      </div>
      <div class="col-xl-6">

        <b-tabs class="nav-tabs-right mb-4">
          <b-tab title="Home" active>
            <div class="card-body">
              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </div>
          </b-tab>
          <b-tab title="Profile">
            <div class="card-body">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
          </b-tab>
          <b-tab title="Messages">
            <div class="card-body">
              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
          </b-tab>
        </b-tabs>

      </div>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
      Responsive navs
    </h5>

    <div class="demo-vertical-spacing">
      <!-- .nav-responsive-md - stacked on extra small and small screens -->
      <div class="nav-responsive-md">
        <b-nav class="justify-content-end">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

      <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
      <div class="nav-responsive-lg">
        <b-nav tabs>
          <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
          <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

      <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
      <div class="nav-responsive-lg">
        <b-nav tabs class="tabs-alt">
          <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
          <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

      <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
      <div class="nav-responsive-lg">
        <b-nav pills>
          <b-nav-item active>Active <b-badge variant="primary">22</b-badge></b-nav-item>
          <b-nav-item>Link <b-badge variant="outline-success">22</b-badge></b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

      <!-- .nav-responsive-xl - stacked on extra small, small, medium and large screens -->
      <b-tabs class="nav-tabs-top nav-responsive-xl">
        <b-tab title="Home" active>
          <div class="card-body">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
          </div>
        </b-tab>
        <b-tab title="Profile">
          <div class="card-body">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
          </div>
        </b-tab>
        <b-tab title="Messages">
          <div class="card-body">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
          </div>
        </b-tab>
      </b-tabs>

      <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
      <b-tabs class="nav-tabs-left nav-responsive-lg">
        <b-tab title="Home" active>
          <div class="card-body">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
          </div>
        </b-tab>
        <b-tab title="Profile">
          <div class="card-body">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
          </div>
        </b-tab>
        <b-tab title="Messages">
          <div class="card-body">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
          </div>
        </b-tab>
      </b-tabs>

      <!-- .nav-responsive-md - stacked on extra small and small screens -->
      <b-tabs class="nav-tabs-right nav-responsive-md">
        <b-tab title="Home" active>
          <div class="card-body">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
          </div>
        </b-tab>
        <b-tab title="Profile">
          <div class="card-body">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
          </div>
        </b-tab>
        <b-tab title="Messages">
          <div class="card-body">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
          </div>
        </b-tab>
      </b-tabs>

      <!-- .nav-responsive-sm - stacked on extra small screens -->
      <b-tabs class="nav-tabs-bottom nav-responsive-sm">
        <b-tab title="Home" active>
          <div class="card-body">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
          </div>
        </b-tab>
        <b-tab title="Profile">
          <div class="card-body">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
          </div>
        </b-tab>
        <b-tab title="Messages">
          <div class="card-body">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
      Within cards
    </h5>

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

    <div class="material-style-only">
      <div class="text-muted pb-1 mt-5 mb-4">Light (material only)</div>

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

  </div>
</template>

<script>
export default {
  name: 'ui-navs',
  metaInfo: {
    title: 'Navs - UI elements'
  }
}
</script>
