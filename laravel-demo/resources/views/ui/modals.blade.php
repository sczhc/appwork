@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/bootbox/bootbox.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.js') }}"></script>
    
    <script src="{{ mix('/js/ui_modals.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Modals
    </h4>

    <div class="card mb-4">
        <h6 class="card-header">
            Bootstrap modals
        </h6>
        <div class="card-body">
            <div class="text-light small font-weight-semibold mb-3">Default</div>

            <div class="mb-3">
                <label class="custom-control custom-radio">
                    <input name="modals-default-size" type="radio" class="custom-control-input" value="lg">
                    <span class="custom-control-label">Large</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-default-size" type="radio" class="custom-control-input" value="md" checked>
                    <span class="custom-control-label">Medium</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-default-size" type="radio" class="custom-control-input" value="sm">
                    <span class="custom-control-label">Small</span>
                </label>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modals-default">Show</button>

            <!-- Modal template -->
            <div class="modal fade" id="modals-default">
                <div class="modal-dialog">
                    <form class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Payment
                                <span class="font-weight-light">Information</span>
                                <br>
                                <small class="text-muted">We need payment information to process your order.</small>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-row">
                                <div class="form-group col">
                                    <label class="form-label">Card number</label>
                                    <input type="text" class="form-control" placeholder="XXXX XXXX XXXX XXXX">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col mb-0">
                                    <label class="form-label">Expiration date</label>
                                    <input type="text" class="form-control" placeholder="DD / MM">
                                </div>
                                <div class="form-group col mb-0">
                                    <label class="form-label">Card holder</label>
                                    <input type="text" class="form-control" placeholder="Name on card">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr class="m-0">
        <div class="card-body">
            <div class="text-light small font-weight-semibold mb-3">Top</div>

            <div class="mb-3">
                <label class="custom-control custom-radio">
                    <input name="modals-top-size" type="radio" class="custom-control-input" value="lg">
                    <span class="custom-control-label">Large</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-top-size" type="radio" class="custom-control-input" value="md" checked>
                    <span class="custom-control-label">Medium</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-top-size" type="radio" class="custom-control-input" value="sm">
                    <span class="custom-control-label">Small</span>
                </label>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modals-top">Show</button>

            <!-- Modal template -->
            <div class="modal modal-top fade" id="modals-top">
                <div class="modal-dialog">
                    <form class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Payment
                                <span class="font-weight-light">Information</span>
                                <br>
                                <small class="text-muted">We need payment information to process your order.</small>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-row">
                                <div class="form-group col">
                                    <label class="form-label">Card number</label>
                                    <input type="text" class="form-control" placeholder="XXXX XXXX XXXX XXXX">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col mb-0">
                                    <label class="form-label">Expiration date</label>
                                    <input type="text" class="form-control" placeholder="DD / MM">
                                </div>
                                <div class="form-group col mb-0">
                                    <label class="form-label">Card holder</label>
                                    <input type="text" class="form-control" placeholder="Name on card">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr class="m-0">
        <div class="card-body">
            <div class="text-light small font-weight-semibold mb-3">Slide</div>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modals-slide">Show</button>

            <!-- Modal template -->
            <div class="modal modal-slide fade" id="modals-slide">
                <div class="modal-dialog">
                    <form class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                        <div class="modal-body">
                            <p class="text-center text-big mb-4">Before you proceed, you have to login to make the necessary changes</p>
                            <button type="button" class="btn btn-primary btn-block">Continue</button>
                            <button type="button" class="btn btn-default btn-block" data-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr class="m-0">
        <div class="card-body">
            <div class="text-light small font-weight-semibold mb-3">Fill-In</div>

            <div class="mb-3">
                <label class="custom-control custom-radio">
                    <input name="modals-fill-in-size" type="radio" class="custom-control-input" value="lg">
                    <span class="custom-control-label">Large</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-fill-in-size" type="radio" class="custom-control-input" value="md" checked>
                    <span class="custom-control-label">Medium</span>
                </label>
                <label class="custom-control custom-radio">
                    <input name="modals-fill-in-size" type="radio" class="custom-control-input" value="sm">
                    <span class="custom-control-label">Small</span>
                </label>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modals-fill-in">Show</button>

            <!-- Modal template -->
            <div class="modal modal-fill-in fade" id="modals-fill-in">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">×</button>
                        <div class="modal-body">
                            <p class="text-white text-large font-weight-light mb-3">Subscribe to our newsletter</p>
                            <div class="input-group input-group-lg mb-3">
                                <input type="text" class="form-control bg-white border-0" placeholder="Your email">
                                <span class="input-group-append">
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </span>
                            </div>
                            <div class="text-center text-right text-white opacity-50">We will not sell/rent your email address</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card mb-4">
        <h6 class="card-header">
            Bootbox
        </h6>
        <div class="card-body demo-inline-spacing">
            <button id="bootbox-alert" class="btn btn-warning">Alert</button>
            <button id="bootbox-confirm" class="btn btn-danger">Confirm</button>
            <button id="bootbox-prompt" class="btn btn-success">Prompt</button>
            <button id="bootbox-custom" class="btn btn-info">Custom</button>
        </div>
    </div>

    <div class="card mb-4">
        <h6 class="card-header">
            Bootstrap SweetAlert
        </h6>
        <div class="card-body demo-inline-spacing">
            <button class="btn btn-lg btn-default" id="sweetalert-example-1">Basic</button>
            <button class="btn btn-lg btn-default" id="sweetalert-example-2">Full</button>
            <button class="btn btn-lg btn-default" id="sweetalert-example-3">With loader</button>
            <button class="btn btn-lg btn-info" id="sweetalert-example-4">Info</button>
            <button class="btn btn-lg btn-success" id="sweetalert-example-5">Success</button>
            <button class="btn btn-lg btn-warning" id="sweetalert-example-6">Warning</button>
            <button class="btn btn-lg btn-danger" id="sweetalert-example-7">Danger</button>
        </div>
    </div>
@endsection