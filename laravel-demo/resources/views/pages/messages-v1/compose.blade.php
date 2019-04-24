@extends('layouts.layout-2-flex')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/typography.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/editor.css') }}">
    
    <!-- Page -->
    <link rel="stylesheet" href="{{ mix('/vendor/css/pages/messages.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script>
        // Quill does not support IE 10 and below so don't load it to prevent console errors
        if (typeof document.documentMode !== 'number' || document.documentMode > 10) {
            document.write('\x3Cscript src="{{ mix('/vendor/libs/quill/quill.js') }}">\x3C/script>');
        }
    </script>
    
    <script src="{{ mix('/js/pages_messages.js') }}"></script>
@endsection

@section('content')
    <!-- `.messages-wrapper` fills all available space of container -->
    <div class="messages-wrapper">

        <!-- Messages sidebox -->
        <div class="messages-sidebox messages-scroll">

            <div class="py-3 px-4">
                <div class="media align-items-center">
                    <div class="media-body">
                        <button type="button" class="btn btn-primary btn-block">Compose</button>
                    </div>
                    <a href="javascript:void(0)" class="messages-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-4">&times;</a>
                </div>
            </div>
            <hr class="border-light mx-4 mt-0 mb-4">

            <!-- Mail boxes -->
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2 px-4">
                <div>
                    <i class="ion ion-ios-filing"></i> &nbsp; Inbox
                </div>
                <div class="badge badge-primary">15</div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2 px-4">
                <div>
                    <i class="ion ion-ios-mail"></i> &nbsp; Sent
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2 px-4">
                <div>
                    <i class="ion ion-md-create"></i> &nbsp; Drafts
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2 px-4">
                <div>
                    <i class="ion ion-md-folder-open"></i> &nbsp; Spam
                </div>
            </a>
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2 px-4">
                <div>
                    <i class="ion ion-md-trash"></i> &nbsp; Trash
                </div>
            </a>
            <!-- / Mail boxes -->

            <hr class="border-light m-4">

            <!-- Labels -->
            <h6 class="text-tiny font-weight-bold px-4">LABELS</h6>
            <a href="javascript:void(0)" class="d-block text-muted py-1 px-4">
                <span class="badge badge-dot badge-success"></span> &nbsp; Clients
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1 px-4">
                <span class="badge badge-dot badge-danger"></span> &nbsp; Important
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1 px-4">
                <span class="badge badge-dot badge-info"></span> &nbsp; Social
            </a>
            <a href="javascript:void(0)" class="d-block text-muted py-1 px-4">
                <span class="badge badge-dot badge-warning"></span> &nbsp; Other
            </a>
            <!-- / Labels -->

        </div>
        <!-- / Messages sidebox -->

        <!-- Wrap `.messages-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll -->
        <div class="w-100 position-relative">

            <!-- Remove `.messages-scroll` and add `.w-100` if you don't need scroll -->
            <div class="messages-content messages-scroll">

                <!-- Header -->
                <h4 class="font-weight-bold container-p-x py-3 py-lg-4 m-0">
                    <a href="javascript:void(0)" class="messages-sidebox-toggler d-lg-none text-muted align-middle px-3 mr-2"><i class="ion ion-md-more"></i></a>
                    New message
                </h4>
                <hr class="border-light m-0">
                <!-- / Header -->

                <div class="container-p-x py-4">

                    <div class="form-group">
                        <label class="form-label">To:</label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Subject:</label>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group mt-4">
                        <div id="message-editor-toolbar">
                            <span class="ql-formats">
                                <select class="ql-font"></select>
                                <select class="ql-size"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-bold"></button>
                                <button class="ql-italic"></button>
                                <button class="ql-underline"></button>
                                <button class="ql-strike"></button>
                            </span>
                            <span class="ql-formats">
                                <select class="ql-color"></select>
                                <select class="ql-background"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-script" value="sub"></button>
                                <button class="ql-script" value="super"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-header" value="1"></button>
                                <button class="ql-header" value="2"></button>
                                <button class="ql-blockquote"></button>
                                <button class="ql-code-block"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-list" value="ordered"></button>
                                <button class="ql-list" value="bullet"></button>
                                <button class="ql-indent" value="-1"></button>
                                <button class="ql-indent" value="+1"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-direction" value="rtl"></button>
                                <select class="ql-align"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-link"></button>
                                <button class="ql-image"></button>
                                <button class="ql-video"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-clean"></button>
                            </span>
                        </div>
                        <div id="message-editor" style="height: 400px"></div>
                        <textarea id="message-editor-fallback" class="form-control d-none" style="height: 400px"></textarea>
                    </div>

                    <div class="text-right mt-4">
                        <button type="button" class="btn btn-primary ml-2"><i class="ion ion-ios-paper-plane"></i>&nbsp; Send</button>
                        <button type="button" class="btn btn-default ml-2"><i class="ion ion-md-save"></i>&nbsp; Save</button>
                        <button type="button" class="btn btn-default ml-2">Cancel</button>
                    </div>

                </div>
            </div><!-- / .messages-content -->

        </div>

    </div><!-- / .messages-wrapper -->
@endsection