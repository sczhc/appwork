@extends('layouts.layout-2')

@section('scripts')
    <script src="{{ mix('/js/ui_navs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Navs
    </h4>

    <div class="demo-vertical-spacing-sm bg-lighter rounded p-4 mb-4 clearfix">
        <!-- Left -->
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Center -->
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Right -->
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Vertical -->
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
        Tabs & Pills
    </h5>

    <div class="demo-vertical-spacing">
        <!-- Default tabs -->
        <ul class="nav nav-tabs nav-responsive-xl">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Alt tabs -->
        <ul class="nav nav-tabs tabs-alt nav-responsive-xl">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Pills -->
        <ul class="nav nav-pills nav-responsive-xl">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
    </div>

    <div class="material-style-only">
        <h6 class="text-muted pb-1 mt-5 mb-4">Light (material only)</h6>

        <div class="demo-vertical-spacing bg-primary rounded p-4" id="nav-light-demo">
            <!-- Default tabs -->
            <ul class="nav nav-tabs md-tabs-light">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0)">Action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>

            <!-- Alt tabs -->
            <ul class="nav nav-tabs tabs-alt md-tabs-light">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0)">Action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>

            <!-- Pills -->
            <ul class="nav nav-pills md-pills-light">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0)">Action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
        </div>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Sizes</h6>

    <div class="demo-vertical-spacing">
        <!-- Large -->
        <ul class="nav nav-lg nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
        <ul class="nav nav-lg nav-tabs tabs-alt">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
        <ul class="nav nav-lg nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Small -->
        <ul class="nav nav-sm nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
        <ul class="nav nav-sm nav-tabs tabs-alt">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
        <ul class="nav nav-sm nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Fill & Justify</h6>

    <div class="demo-vertical-spacing">
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active
                    <span class="badge badge-primary">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link
                    <span class="badge badge-outline-success">22</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
    </div>

    <h6 class="pb-1 mt-5 mb-4">Dropdowns</h6>

    <div class="demo-vertical-spacing" id="nav-dropdowns-demo">
        <!-- Default tabs -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0)">Action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Alt tabs -->
        <ul class="nav nav-tabs tabs-alt">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0)">Action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>

        <!-- Pills -->
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)">Active</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0)">Action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                    <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
            </li>
        </ul>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
        Panel tabs
    </h5>

    <div class="row">
        <div class="col-xl-6">

            <div class="nav-tabs-top mb-4">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#navs-top-home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-top-profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-top-messages">Messages</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-top-home">
                        <div class="card-body">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-top-profile">
                        <div class="card-body">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny
                                pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-top-messages">
                        <div class="card-body">
                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy
                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably
                                haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-xl-6">

            <div class="nav-tabs-bottom mb-4">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#navs-bottom-home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-bottom-profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-bottom-messages">Messages</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-bottom-home">
                        <div class="card-body">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-bottom-profile">
                        <div class="card-body">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny
                                pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-bottom-messages">
                        <div class="card-body">
                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy
                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably
                                haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-xl-6">

            <div class="nav-tabs-left mb-4">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#navs-left-home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-left-profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-left-messages">Messages</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-left-home">
                        <div class="card-body">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-left-profile">
                        <div class="card-body">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny
                                pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-left-messages">
                        <div class="card-body">
                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy
                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably
                                haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-xl-6">

            <div class="nav-tabs-right mb-4">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#navs-right-home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-right-profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#navs-right-messages">Messages</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-right-home">
                        <div class="card-body">
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-right-profile">
                        <div class="card-body">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny
                                pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="navs-right-messages">
                        <div class="card-body">
                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy
                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably
                                haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
        Responsive navs
    </h5>

    <div class="demo-vertical-spacing">
        <!-- .nav-responsive-md - stacked on extra small and small screens -->
        <div class="nav-responsive-md">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
        </div>

        <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
        <div class="nav-responsive-lg">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active
                        <span class="badge badge-primary">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link
                        <span class="badge badge-outline-success">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
        </div>

        <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
        <div class="nav-responsive-lg">
            <ul class="nav nav-tabs tabs-alt">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active
                        <span class="badge badge-primary">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link
                        <span class="badge badge-outline-success">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
        </div>

        <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
        <div class="nav-responsive-lg">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0)">Active
                        <span class="badge badge-primary">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link
                        <span class="badge badge-outline-success">22</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
        </div>

        <!-- .nav-responsive-xl - stacked on extra small, small, medium and large screens -->
        <div class="nav-tabs-top nav-responsive-xl">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#navs-top-responsive-link-1">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#navs-top-responsive-link-2">Link 2</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-top-responsive-link-1">
                    <div class="card-body">
                        <p>Stacked on extra small, small, medium and large screens</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-top-responsive-link-2">
                    <div class="card-body">
                        <p>Tab content</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- .nav-responsive-lg - stacked on extra small, small and medium screens -->
        <div class="nav-tabs-left nav-responsive-lg">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#navs-left-responsive-link-1">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#navs-left-responsive-link-2">Link 2</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-left-responsive-link-1">
                    <div class="card-body">
                        <p>Stacked on extra small, small and medium screens</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-left-responsive-link-2">
                    <div class="card-body">
                        <p>Tab content</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- .nav-responsive-md - stacked on extra small and small screens -->
        <div class="nav-tabs-right nav-responsive-md">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#navs-right-responsive-link-1">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#navs-right-responsive-link-2">Link 2</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-right-responsive-link-1">
                    <div class="card-body">
                        <p>Stacked on extra small and small screens</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-right-responsive-link-2">
                    <div class="card-body">
                        <p>Tab content</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- .nav-responsive-sm - stacked on extra small screens -->
        <div class="nav-tabs-bottom nav-responsive-sm">
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#navs-bottom-responsive-link-1">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#navs-bottom-responsive-link-2">Link 2</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-bottom-responsive-link-1">
                    <div class="card-body">
                        <p>Stacked on extra small screens</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-bottom-responsive-link-2">
                    <div class="card-body">
                        <p>Tab content</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="border-light container-m--x my-4">
    <h5 class="font-weight-bold py-3 my-4">
        Within cards
    </h5>

    <div class="row">
        <div class="col-md">

            <div class="card text-center mb-3">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs nav-responsive-md">
                        <li class="nav-item">
                            <a class="nav-link active" href="javascript:void(0)">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
        <div class="col-md">

            <div class="card text-center mb-3">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills nav-responsive-md">
                        <li class="nav-item">
                            <a class="nav-link active" href="javascript:void(0)">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    </div>

    <div class="material-style-only">
        <div class="text-muted pb-1 mt-5 mb-4">Light (material only)</div>

        <div class="row">
            <div class="col-md">

                <div class="card text-center mb-3">
                    <div class="card-header bg-primary border-0">
                        <ul class="nav nav-tabs md-tabs-light card-header-tabs nav-responsive-md">
                            <li class="nav-item">
                                <a class="nav-link active" href="javascript:void(0)">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Special title treatment</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
            <div class="col-md">

                <div class="card text-center mb-3">
                    <div class="card-header bg-primary border-0">
                        <ul class="nav nav-pills md-pills-light card-header-pills nav-responsive-md">
                            <li class="nav-item">
                                <a class="nav-link active" href="javascript:void(0)">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Special title treatment</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection