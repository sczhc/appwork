@extends('layouts.layout-2')

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
    <div class="row">

        <!-- Messages sidebox -->
        <div class="messages-sidebox col mb-4">

            <button type="button" class="btn btn-primary btn-block mt-md-4">Compose</button>
            <hr class="border-light my-4">

            <!-- Mail boxes -->
            <a href="javascript:void(0)" class="d-flex justify-content-between align-items-center text-muted py-2">
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

            <div class="card">
                <h4 class="card-header py-4">New message</h4>

                <div class="card-body">

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

                    <!-- Footer -->
                    <div class="text-right mt-4">
                        <button type="button" class="btn btn-primary ml-2"><i class="ion ion-ios-paper-plane"></i>&nbsp; Send</button>
                        <button type="button" class="btn btn-default ml-2"><i class="ion ion-md-save"></i>&nbsp; Save</button>
                        <button type="button" class="btn btn-default ml-2">Cancel</button>
                    </div>
                    <!-- / Footer -->

                </div>

            </div>

        </div>

    </div>
@endsection