@extends('layouts.layout-2')

@section('styles')
    <!-- Page -->
    <link rel="stylesheet" href="{{ mix('/vendor/css/pages/messages.css') }}">
@endsection

@section('scripts')
    <script src="{{ mix('/js/pages_messages.js') }}"></script>
@endsection

@section('content')
    <div class="row">

        <!-- Messages sidebox -->
        <div class="messages-sidebox col mb-4">

            <button type="button" class="btn btn-primary btn-block mt-md-4">Compose</button>
            <hr class="border-light my-4">

            <!-- Mail boxes -->
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-dark font-weight-bold py-2">
                <div>
                    <i class="ion ion-ios-filing"></i> &nbsp; Inbox
                </div>
                <div class="badge badge-primary">15</div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2">
                <div>
                    <i class="ion ion-ios-mail"></i> &nbsp; Sent
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2">
                <div>
                    <i class="ion ion-md-create"></i> &nbsp; Drafts
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2">
                <div>
                    <i class="ion ion-md-folder-open"></i> &nbsp; Spam
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2">
                <div>
                    <i class="ion ion-md-trash"></i> &nbsp; Trash
                </div>
            </a>
            <!-- / Mail boxes -->

            <hr class="border-light my-4">

            <!-- Labels -->
            <h6 class="text-tiny font-weight-bold">LABELS</h6>
            <a href="javascript:void(0)" class="d-block text-muted py-1">
                <span class="badge badge-dot badge-success"></span> &nbsp; Clients
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1">
                <span class="badge badge-dot badge-danger"></span> &nbsp; Important
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1">
                <span class="badge badge-dot badge-info"></span> &nbsp; Social
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1">
                <span class="badge badge-dot badge-warning"></span> &nbsp; Other
            </a>
            <!-- / Labels -->

        </div>
        <!-- / Messages sidebox -->

        <div class="col">

            <!-- Messages list -->
            <div class="card">

                <!-- Header -->
                <h4 class="card-header media flex-wrap align-items-center py-4">
                    <div class="media-body"><i class="ion ion-ios-filing"></i> &nbsp; Inbox</div>
                    <input type="text" class="form-control form-control-sm" placeholder="Search..." style="max-width: 10rem;">
                </h4>
                <!-- / Header -->

                <!-- Controls -->
                <div class="media flex-wrap align-items-center py-1 px-2">
                    <div class="media-body d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn messages-tooltip text-muted" title="Refresh"><i class="ion ion-md-refresh"></i></button>
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn messages-tooltip text-muted" title="Mark as unread"><i class="ion ion-md-mail-unread"></i></button>
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn messages-tooltip text-muted" title="Mark as important"><i class="ion ion-md-alert"></i></button>
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn messages-tooltip text-muted" title="Move to spam"><i class="ion ion-md-folder-open"></i></button>
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn messages-tooltip text-muted" title="Move to trash"><i class="ion ion-md-trash"></i></button>
                    </div>

                    <div class="text-muted mr-3 ml-auto">1-25 of 91</div>

                    <div class="d-flex flex-wrap">
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-back"></i></button>
                        <button type="button" class="btn btn-default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-forward"></i></button>
                    </div>
                </div>
                <hr class="border-light m-0">
                <!-- / Controls -->

                <ul class="list-group messages-list">

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-info mr-1"></span>
                            Facebook
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            Reset your account password
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star d-block text-warning text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Mae Gibson
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Street Photography Competition
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-danger mr-1"></span>
                            GitHub
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            [GitHub] Your password has been changed
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star d-block text-warning text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-success mr-1"></span>
                            Nelle Maxwell
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            New design concepts
                            <i class="ion ion-md-attach"></i>
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Dropbox
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Complete your Dropbox setup
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-warning mr-1"></span>
                            Task manager
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            You have 5 overdue tasks!
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-info mr-1"></span>
                            Facebook
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            Reset your account password
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Mae Gibson
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Street Photography Competition
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-danger mr-1"></span>
                            GitHub
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            [GitHub] Your password has been changed
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-success mr-1"></span>
                            Nelle Maxwell
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            New design concepts
                            <i class="ion ion-md-attach"></i>
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star d-block text-warning text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Dropbox
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Complete your Dropbox setup
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-warning mr-1"></span>
                            Task manager
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            You have 5 overdue tasks!
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-info mr-1"></span>
                            Facebook
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            Reset your account password
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Mae Gibson
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Street Photography Competition
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-danger mr-1"></span>
                            GitHub
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            [GitHub] Your password has been changed
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-success mr-1"></span>
                            Nelle Maxwell
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            New design concepts
                            <i class="ion ion-md-attach"></i>
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Dropbox
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Complete your Dropbox setup
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-warning mr-1"></span>
                            Task manager
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            You have 5 overdue tasks!
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-info mr-1"></span>
                            Facebook
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            Reset your account password
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Mae Gibson
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Street Photography Competition
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-danger mr-1"></span>
                            GitHub
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            [GitHub] Your password has been changed
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-success mr-1"></span>
                            Nelle Maxwell
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            New design concepts
                            <i class="ion ion-md-attach"></i>
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            Dropbox
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            Complete your Dropbox setup
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-warning mr-1"></span>
                            Task manager
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark">
                            You have 5 overdue tasks!
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                    <li class="list-group-item px-4">
                        <div class="message-checkbox mr-1">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input">
                                <span class="custom-control-label"></span>
                            </label>
                        </div>
                        <a href="javascript:void(0)" class="ion ion-md-star-outline d-block text-lighter text-big mr-3"></a>
                        <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                            <span class="badge badge-dot badge-info mr-1"></span>
                            Facebook
                        </a>
                        <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark font-weight-bold">
                            Reset your account password
                        </a>
                        <div class="message-date text-muted">1d ago</div>
                    </li>

                </ul>

            </div>
            <!-- / Messages list -->

        </div>
    </div>
@endsection