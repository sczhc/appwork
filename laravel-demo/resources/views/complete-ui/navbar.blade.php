<div class="ui-block">
    <h3 class="ui-block-heading">Navbar</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example" id="navbar-demo">
        <nav class="navbar navbar-expand-lg bg-light" style="z-index: 20">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-1">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0)">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">Dropdown link</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">Action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <!-- Javascript -->
        <script>
            $(function() {
                if ($('html').attr('dir') === 'rtl' || $('body').attr('dir') === 'rtl') {
                    $('#navbar-demo .dropdown-menu').addClass('dropdown-menu-right');
                }
            });
        </script>
        <!-- / Javascript -->
    </div>

    <h4 class="ui-block-heading">Elements</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-2">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-2">
                <div class="navbar-nav mr-auto">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                </div>

                <span class="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-3">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-3">
                <div class="navbar-nav mr-auto">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                </div>

                <form class="form-inline">
                    <button class="btn btn-outline-success mr-3" type="button">Main button</button>
                    <button class="btn btn-sm btn-outline-secondary align-middle" type="button">Smaller button</button>
                </form>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-4">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-4">
                <div class="navbar-nav mr-auto">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                </div>

                <form class="form-inline">
                    <div class="input-group">
                        <span class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </span>
                        <input type="text" class="form-control" placeholder="Username">
                    </div>
                </form>
            </div>
        </nav>
    </div>

    <h4 class="ui-block-heading">Styling</h4>

    <div class="cui-example">
        <div class="cui-example-vertical-spacing-sm bg-light p-3">
            <!-- Theme navbar -->
            <nav class="navbar navbar-expand-lg bg-navbar-theme">
                <a class="navbar-brand" href="javascript:void(0)">.bg-navbar-theme</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-5">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-5">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- White navbar -->
            <nav class="navbar navbar-expand-lg bg-white">
                <a class="navbar-brand" href="javascript:void(0)">.bg-white</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-6">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-6">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Primary navbar -->
            <nav class="navbar navbar-expand-lg bg-primary">
                <a class="navbar-brand" href="javascript:void(0)">.bg-primary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-7">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-7">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Secondary navbar -->
            <nav class="navbar navbar-expand-lg bg-secondary">
                <a class="navbar-brand" href="javascript:void(0)">.bg-secondary</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-8">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-8">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Success navbar -->
            <nav class="navbar navbar-expand-lg bg-success">
                <a class="navbar-brand" href="javascript:void(0)">.bg-success</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-9">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-9">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Info navbar -->
            <nav class="navbar navbar-expand-lg bg-info">
                <a class="navbar-brand" href="javascript:void(0)">.bg-info</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-10">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-10">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Warning navbar -->
            <nav class="navbar navbar-expand-lg bg-warning">
                <a class="navbar-brand" href="javascript:void(0)">.bg-warning</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-11">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-11">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Danger navbar -->
            <nav class="navbar navbar-expand-lg bg-danger">
                <a class="navbar-brand" href="javascript:void(0)">.bg-danger</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-12">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-12">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>

            <!-- Dark navbar -->
            <nav class="navbar navbar-expand-lg bg-dark">
                <a class="navbar-brand" href="javascript:void(0)">.bg-dark</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-13">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-13">
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                        <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                    </div>

                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>
        </div>
    </div>

    <h4 class="ui-block-heading">Layouts</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand w-lg-100 mr-0" href="javascript:void(0)">Brand</a>

            <div class="navbar-text order-lg-2 w-lg-100 text-right small text-truncate">always show</div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-14">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse order-lg-1 flex-shrink-0" id="navbar-example-14">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                    <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a href="javascript:void(0)" class="navbar-brand order-lg-2 flex-shrink-0 mr-0">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-example-15">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse navbar-example-15 order-lg-1 w-lg-100">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                    <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                </div>
            </div>
            <div class="navbar-collapse collapse navbar-example-15 justify-content-end order-lg-3 w-lg-100">
                <div class="nav navbar-nav">
                    <a class="nav-item nav-link" href="javascript:void(0)"><i class="ion ion-logo-twitter"></i></a>
                    <a class="nav-item nav-link" href="javascript:void(0)"><i class="ion ion-logo-github"></i></a>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-16">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-16">
                <div class="navbar-nav mr-auto">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                    <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-17">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-17">
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                    <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-light">
            <a href="javascript:void(0)" class="navbar-brand">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-18">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse justify-content-between" id="navbar-example-18">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="javascript:void(0)">Home</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Features</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Pricing</a>
                    <a class="nav-item nav-link disabled" href="javascript:void(0)">Disabled</a>
                </div>
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link" href="javascript:void(0)">Sign In</a>
                    <a class="nav-item nav-link" href="javascript:void(0)">Sign Up</a>
                </div>
            </div>
        </nav>
    </div>

    <h4 class="ui-block-heading">Mega dropdown</h4>

    <samp class="cui-example-code-static mb-4" style="margin-top: -1.75rem;">
        &lt;script src="&#123;&#123; mix('/vendor/js/mega-dropdown.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <div class="cui-example cui-example-vertical-spacing" id="navbar-demo-2">
        <nav class="navbar navbar-expand-lg bg-light" style="z-index: 21">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-19">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-19">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">Dropdown</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)">Action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                            <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item mega-dropdown">
                        <a class="nav-link dropdown-toggle navbar-example-19-mega-dropdown" href="javascript:void(0)" data-toggle="mega-dropdown">Mega (click)</a>
                        <div class="dropdown-menu p-4">
                            <div class="alert alert-info">
                                Add <code>.mega-link</code> class to the element to close menu on click
                            </div>
                            <div class="row row-bordered ui-bordered">
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                                <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item mega-dropdown">
                        <a class="nav-link dropdown-toggle navbar-example-19-mega-dropdown" href="javascript:void(0)" data-toggle="mega-dropdown" data-trigger="hover">Mega (hover)</a>
                        <div class="dropdown-menu p-4">
                            <div class="alert alert-info">
                                Add <code>.mega-link</code> class to the element to close menu on click
                            </div>
                            <div class="row row-bordered ui-bordered">
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                                <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                                <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Within container
                 Note: Do not forget to add `.position-relative` to `.container`
        -->
        <nav class="navbar navbar-expand-lg bg-light" style="z-index: 20">
            <div class="container position-relative">
                <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-20">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-example-20">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" data-trigger="hover">Dropdown (hover)</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item mega-dropdown">
                            <a href="javascript:void(0)" class="nav-link dropdown-toggle navbar-example-20-mega-dropdown">Mega (click)</a>
                            <div class="dropdown-menu p-4">
                                <div class="alert alert-info">
                                    Add <code>.mega-link</code> class to the element to close menu on click
                                </div>
                                <div class="row row-bordered ui-bordered">
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                                    <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item mega-dropdown">
                            <a href="javascript:void(0)" class="nav-link dropdown-toggle navbar-example-20-mega-dropdown" data-trigger="hover">Mega (hover)</a>
                            <div class="dropdown-menu p-4">
                                <div class="alert alert-info">
                                    Add <code>.mega-link</code> class to the element to close menu on click
                                </div>
                                <div class="row row-bordered ui-bordered">
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)">Column</a></div>
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="mega-link">.mega-link</a></div>
                                    <div class="col-sm-6 col-lg p-3"><a href="javascript:void(0)" class="btn btn-primary">Button</a></div>
                                    <div class="col-sm-6 col-lg p-3"><input type="text" class="form-control" placeholder="Input"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Javascript -->
        <script>
            $(function() {
                if ($('html').attr('dir') === 'rtl' || $('body').attr('dir') === 'rtl') {
                    $('#navbar-demo-2 .dropdown-menu').addClass('dropdown-menu-right');
                }

                $('.navbar-example-19-mega-dropdown, .navbar-example-20-mega-dropdown').each(function() {
                    new MegaDropdown(this);
                });
            });
        </script>
        <!-- / Javascript -->
    </div>

    <h4 class="ui-block-heading">Navbar search</h4>

    <div class="cui-example cui-example-vertical-spacing">
        <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example-21">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-example-21">
                <ul class="navbar-nav align-items-lg-center mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0)">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <label class="nav-link navbar-search-box">
                            <i class="ion ion-ios-search navbar-icon align-middle"></i>
                            <span class="navbar-search-input">
                                <input type="text" class="form-control mx-2" placeholder="Search..." style="width:140px">
                                <a href="javascript:void(0)" class="navbar-search-cancel">&times;</a>
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Javascript -->
        <script>
            $(function() {
                $('#navbar-example-21 .navbar-search-input > input').on('focus', function() {
                    $('#navbar-example-21 .navbar-search-box').addClass('active');
                });
                $('#navbar-example-21 .navbar-search-cancel').on('click', function(e) {
                    e.preventDefault();
                    $('#navbar-example-21 .navbar-search-box').removeClass('active');
                });
            });
        </script>
        <!-- / Javascript -->
    </div>

</div>
