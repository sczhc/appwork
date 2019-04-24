<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Navs</h3>

    <h4 class="ui-block-heading">Base</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

      <b-nav class="justify-content-end">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <h4 class="ui-block-heading">Vertical</h4>

    <div class="cui-example">
      <b-nav vertical>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <h4 class="ui-block-heading">Tabs & pills</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

    <h4 class="ui-block-heading">Sizes</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

    <h4 class="ui-block-heading">Fill & justify</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

    <h4 class="ui-block-heading">Using dropdowns</h4>

    <div class="cui-example cui-example-vertical-spacing">
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

    <h4 class="ui-block-heading material-style-only">Light navs (Material only)</h4>

    <div class="cui-example material-style-only">
      <div class="cui-example-vertical-spacing bg-primary p-4">
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

    <h4 class="ui-block-heading">Top tabs</h4>

    <div class="cui-example">
      <b-tabs class="nav-tabs-top">
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

    <h4 class="ui-block-heading">Left tabs</h4>

    <div class="cui-example">
      <b-tabs class="nav-tabs-left">
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

    <h4 class="ui-block-heading">Right tabs</h4>

    <div class="cui-example">
      <b-tabs class="nav-tabs-right">
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

    <h4 class="ui-block-heading">Bottom tabs</h4>

    <div class="cui-example">
      <b-tabs class="nav-tabs-bottom">
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

    <h4 class="ui-block-heading">Responsive navs</h4>

    <p>Try to resize window.</p>

    <div class="cui-example cui-example-vertical-spacing">
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
  </div>
</template>

<script>
export default {}
</script>
