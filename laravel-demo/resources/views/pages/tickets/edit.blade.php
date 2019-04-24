@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/dropzone/dropzone.css') }}">
    
    <!-- Page -->
    <link rel="stylesheet" href="{{ mix('/vendor/css/pages/tickets.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.js') }}"></script>
    <script src="{{ mix('/vendor/libs/dropzone/dropzone.js') }}"></script>
    
    <script src="{{ mix('/js/pages_tickets_edit.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        Ticket #34564
    </h4>

    <div class="card">
        <!-- Ticket -->
        <div class="card-body">

            <!-- Header -->
            <div class="row no-gutters">
                <div class="col-sm-6 col-md-8 col-lg-7 col-xl-8">

                    <!-- Author -->
                    <div class="media align-items-center mb-4">
                        <img src="/img/avatars/11-small.png" alt="" class="d-block ui-w-50 rounded-circle">
                        <div class="media-body ml-3">
                            <h5 class="mb-1"><a href="javascript:void(0)" class="text-dark">Belle Ross</a></h5>
                            <div class="text-muted small">@bross</div>
                        </div>
                    </div>

                </div>
                <div class="col-sm-6 col-md-4 col-lg-5 col-xl-4">

                    <!-- Dates -->
                    <div class="row no-gutters row-bordered row-border-light ui-bordered mb-4">
                        <div class="col py-1 px-3">
                            <div class="text-muted small">Created at</div>
                            <div class="font-weight-semibold">04/24/2017</div>
                        </div>
                        <div class="col py-1 px-3">
                            <div class="text-muted small">Last update</div>
                            <div class="font-weight-semibold">01/27/2018</div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- / Header -->

            <div class="form-group">
                <label class="form-label">Subject</label>
                <input type="text" class="form-control" value="esse velit enim elit dolor magna est laboris">
            </div>

            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="5"></textarea>
            </div>

        </div>
        <!-- / Ticket -->

        <hr class="border-light m-0">

        <!-- Ticket settings -->
        <div class="card-body">

            <div class="form-row">
                <div class="col-sm-6">

                    <div class="form-group">
                        <label class="form-label">Priority</label>
                        <select class="custom-select">
                            <option selected>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>

                </div>
                <div class="col-sm-6">

                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="custom-select">
                            <option selected>Open</option>
                            <option>Reopened</option>
                            <option>In progress</option>
                            <option>Closed</option>
                        </select>
                    </div>

                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Tags</label>
                <input type="text" value="Feature,High priority" class="form-control" id="ticket-tags">
            </div>

            <div class="ui-bordered px-3 pt-3 mb-3">
                <label class="form-label mb-2">Assignee</label>
                <div>
                    <div class="ui-feed-icon-container d-inline-block mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <img src="/img/avatars/9-small.png" class="ticket-assignee" alt="" title="Amanda Warner">
                    </div>
                    <div class="ui-feed-icon-container d-inline-block mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <img src="/img/avatars/2-small.png" class="ticket-assignee" alt="" title="Leon Wilson">
                    </div>
                    <div class="ui-feed-icon-container d-inline-block mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <img src="/img/avatars/8-small.png" class="ticket-assignee" alt="" title="Hallie Lewis">
                    </div>
                    <a href="javascript:void(0)" class="ticket-assignee-add bg-lighter text-muted mb-3">
                        <span class="ion ion-md-add"></span>
                    </a>
                </div>
            </div>

            <div class="ui-bordered px-3 pt-3">
                <label class="form-label">Attached files</label>
                <div class="clearfix">
                    <div class="ui-feed-icon-container float-left pt-2 mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <a href="javascript:void(0)" class="ticket-file-img" style="background-image: url(/img/bg/5.jpg)"></a>
                    </div>
                    <div class="ui-feed-icon-container float-left pt-2 mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <a href="javascript:void(0)" class="ticket-file-img" style="background-image: url(/img/bg/6.jpg)"></a>
                    </div>
                    <div class="ui-feed-icon-container float-left pt-2 mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <a href="javascript:void(0)" class="ticket-file-img" style="background-image: url(/img/bg/7.jpg)"></a>
                    </div>
                    <div class="ui-feed-icon-container float-left pt-2 mr-3 mb-3">
                        <a href="javascript:void(0)" class="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"></a>
                        <a href="javascript:void(0)" class="ticket-file bg-light text-muted font-weight-bold">TXT</a>
                    </div>
                    <a data-toggle="modal" data-target="#ticket-upload-modal" href="javascript:void(0)" class="ticket-file-add float-left bg-lighter text-muted mt-2 mb-3">
                        <span class="ion ion-md-add"></span>
                    </a>
                </div>
            </div>

        </div>
        <!-- / Ticket settings -->

        <!-- Footer -->
        <div class="card-footer">

            <button type="button" class="btn btn-primary mr-2">Save ticket</button>
            <button type="button" class="btn btn-default">Cancel</button>
            <button type="button" class="btn btn-outline-danger icon-btn borderless float-right">
                <span class="ion ion-md-trash"></span>
            </button>

        </div>
        <!-- Footer -->
    </div>

    <!-- Attach files modal -->
    <div class="modal modal-top fade" id="ticket-upload-modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Attach files to ticket
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                </div>
                <div class="modal-body">
                    <form action="http://posttestserver.com/post.php" class="dropzone needsclick" id="ticket-upload-dropzone">
                        <div class="dz-message needsclick">
                            Drop files here or click to upload
                        </div>
                        <div class="fallback">
                            <input name="file" type="file" multiple>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection