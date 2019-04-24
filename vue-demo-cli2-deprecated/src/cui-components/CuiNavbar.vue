<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Navbar</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <b-navbar toggleable="lg" variant="light" style="z-index: 20">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-1"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-1">
          <b-navbar-nav class="mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item-dd text="Dropdown link" :right="isRTL">
              <b-dd-item href="javascript:void(0)">Action</b-dd-item>
              <b-dd-item href="javascript:void(0)">Another action</b-dd-item>
              <b-dd-item href="javascript:void(0)">Something else here</b-dd-item>
            </b-nav-item-dd>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <b-nav-form class="my-2 my-lg-0">
            <b-input class="mr-sm-2" placeholder="Search" />
            <b-btn variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-btn>
          </b-nav-form>
        </b-collapse>
      </b-navbar>
    </div>

    <h4 class="ui-block-heading">Elements</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-2"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-2">
          <b-navbar-nav class="mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
          </b-navbar-nav>

          <b-nav-text>Navbar text with an inline element</b-nav-text>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-3"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-3">
          <b-navbar-nav class="mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
          </b-navbar-nav>

          <b-nav-form>
            <b-btn variant="outline-success">Main button</b-btn>
            <b-btn variant="outline-secondary" size="sm" class="align-middle ml-3">Smaller button</b-btn>
          </b-nav-form>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-4"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-4">
          <b-navbar-nav class="mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
          </b-navbar-nav>

          <b-nav-form>
            <b-input-group prepend="@">
              <b-input placeholder="Username" />
            </b-input-group>
          </b-nav-form>
        </b-collapse>
      </b-navbar>
    </div>

    <h4 class="ui-block-heading">Styling</h4>

    <div class="cui-example">
      <div class="cui-example-vertical-spacing-sm bg-lighter p-3">
        <!-- Theme navbar -->
        <b-navbar toggleable="lg" variant="navbar-theme">
          <b-navbar-brand href="javascript:void(0)">navbar-theme</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-5"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-5">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- White navbar -->
        <b-navbar toggleable="lg" variant="white">
          <b-navbar-brand href="javascript:void(0)">white</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-6"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-6">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Primary navbar -->
        <b-navbar toggleable="lg" variant="primary">
          <b-navbar-brand href="javascript:void(0)">primary</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-7"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-7">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Secondary navbar -->
        <b-navbar toggleable="lg" variant="secondary">
          <b-navbar-brand href="javascript:void(0)">secondary</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-8"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-8">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Success navbar -->
        <b-navbar toggleable="lg" variant="success">
          <b-navbar-brand href="javascript:void(0)">success</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-9"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-9">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Info navbar -->
        <b-navbar toggleable="lg" variant="info">
          <b-navbar-brand href="javascript:void(0)">info</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-10"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-10">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Warning navbar -->
        <b-navbar toggleable="lg" variant="warning">
          <b-navbar-brand href="javascript:void(0)">warning</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-11"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-11">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Danger navbar -->
        <b-navbar toggleable="lg" variant="danger">
          <b-navbar-brand href="javascript:void(0)">danger</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-12"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-12">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>

        <!-- Dark navbar -->
        <b-navbar toggleable="lg" variant="dark">
          <b-navbar-brand href="javascript:void(0)">dark</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-13"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-13">
            <b-navbar-nav class="mr-auto">
              <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
              <b-nav-item href="javascript:void(0)">Features</b-nav-item>
              <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
              <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <b-nav-text>Navbar text with an inline element</b-nav-text>
          </b-collapse>
        </b-navbar>
      </div>
    </div>

    <h4 class="ui-block-heading">Layouts</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Brand</b-navbar-brand>
        <b-nav-text class="order-lg-2 small text-truncate">always show</b-nav-text>

        <b-navbar-toggle target="navbar-example-14"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-14" class="justify-content-lg-center order-lg-1">
          <b-navbar-nav>
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light" class="justify-content-between">
        <b-navbar-brand href="javascript:void(0)" class="order-lg-2 mr-0">Brand</b-navbar-brand>

        <!-- Custom navbar toggle -->
        <button type="button" v-b-toggle.navbar-example-15-1.navbar-example-15-2 class="navbar-toggler navbar-toggler-right">
          <span class="navbar-toggler-icon"></span>
        </button>

        <b-collapse id="navbar-example-15-1" class="navbar-collapse order-lg-1 flex-basis-100">
          <b-navbar-nav>
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-collapse id="navbar-example-15-2" class="navbar-collapse order-lg-3 flex-basis-100">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="javascript:void(0)"><i class="ion ion-logo-twitter"></i></b-nav-item>
            <b-nav-item href="javascript:void(0)"><i class="ion ion-logo-github"></i></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Brand</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-16"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-16">
          <b-navbar-nav>
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Brand</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-17"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-17">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Brand</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-18"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-18">
          <b-navbar-nav>
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <b-nav-item href="javascript:void(0)" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="javascript:void(0)">Sign In</b-nav-item>
            <b-nav-item href="javascript:void(0)">Sign Up</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <h4 class="ui-block-heading">Mega dropdown</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <b-navbar toggleable="lg" variant="light" style="z-index: 21">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-19"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-19">
          <b-navbar-nav class="mr-auto">
            <b-nav-item-dd text="Dropdown" :right="isRTL">
              <b-dd-item href="javascript:void(0)">Action</b-dd-item>
              <b-dd-item href="javascript:void(0)">Another action</b-dd-item>
              <b-dd-item href="javascript:void(0)">Something else here</b-dd-item>
            </b-nav-item-dd>
            <mega-dropdown>
              <mega-dropdown-toggle>Mega (click)</mega-dropdown-toggle>
              <mega-dropdown-menu class="p-4">
                <div class="alert alert-info">
                  Add <code>.mega-link</code> class to the element to close menu on click
                </div>
                <div class="row row-bordered ui-bordered">
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                  <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                </div>
              </mega-dropdown-menu>
            </mega-dropdown>
            <mega-dropdown trigger="hover">
              <mega-dropdown-toggle>Mega (hover)</mega-dropdown-toggle>
              <mega-dropdown-menu class="p-4">
                <div class="alert alert-info">
                  Add <code>.mega-link</code> class to the element to close menu on click
                </div>
                <div class="row row-bordered ui-bordered">
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                  <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                  <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                </div>
              </mega-dropdown-menu>
            </mega-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- Within container
           Note: Do not forget to add `.position-relative` to `.container`
      -->
      <b-navbar toggleable="lg" variant="light" style="z-index: 20">
        <div class="container position-relative">
          <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
          <b-navbar-toggle target="navbar-example-20"></b-navbar-toggle>

          <b-collapse is-nav id="navbar-example-20">
            <b-navbar-nav class="mr-auto">
              <b-nav-item-dd v-hover-dropdown text="Dropdown1 (hover)" :right="isRTL">
                <b-dd-item href="javascript:void(0)">Action</b-dd-item>
                <b-dd-item href="javascript:void(0)">Another action</b-dd-item>
                <b-dd-item href="javascript:void(0)">Something else here</b-dd-item>
              </b-nav-item-dd>
              <mega-dropdown>
                <mega-dropdown-toggle>Mega (click)</mega-dropdown-toggle>
                <mega-dropdown-menu class="p-4">
                  <div class="alert alert-info">
                    Add <code>.mega-link</code> class to the element to close menu on click
                  </div>
                  <div class="row row-bordered ui-bordered">
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                    <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                  </div>
                </mega-dropdown-menu>
              </mega-dropdown>
              <mega-dropdown trigger="hover">
                <mega-dropdown-toggle>Mega (hover)</mega-dropdown-toggle>
                <mega-dropdown-menu class="p-4">
                  <div class="alert alert-info">
                    Add <code>.mega-link</code> class to the element to close menu on click
                  </div>
                  <div class="row row-bordered ui-bordered">
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                    <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                  </div>
                </mega-dropdown-menu>
              </mega-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>

    <h4 class="ui-block-heading">Navbar search</h4>

    <div class="cui-example">
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="javascript:void(0)">Navbar</b-navbar-brand>
        <b-navbar-toggle target="navbar-example-21"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-example-21">
          <b-navbar-nav class="align-items-lg-center mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
            <li class="nav-item">
              <label class="nav-link navbar-search-box" :class="{ 'active': searchExpanded }">
                <i class="ion ion-ios-search navbar-icon align-middle"></i>
                <span class="navbar-search-input">
                  <b-input class="mx-2" placeholder="Search..." style="width:140px" @focus.native="searchExpanded=true" />
                  <a href="javascript:void(0)" class="navbar-search-cancel" @click.stop.prevent="searchExpanded=false">&times;</a>
                </span>
              </label>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import '@/vendor/libs/hover-dropdown/HoverDropdown'
import { MegaDropdown, MegaDropdownToggle, MegaDropdownMenu } from '@/vendor/libs/mega-dropdown'

export default {
  components: {
    MegaDropdown,
    MegaDropdownToggle,
    MegaDropdownMenu
  },
  data: () => ({
    searchExpanded: false
  })
}
</script>
