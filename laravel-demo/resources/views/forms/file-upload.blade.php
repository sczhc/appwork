@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/dropzone/dropzone.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/flow-js/flow.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/dropzone/dropzone.js') }}"></script>
    <script src="{{ mix('/vendor/libs/flow-js/flow.js') }}"></script>
    
    <script src="{{ mix('/js/forms_file-upload.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Forms /</span> File upload
    </h4>

    <div class="card mb-4">
        <h6 class="card-header">
            Dropzone
        </h6>
        <div class="card-body">
            <form action="/upload" class="dropzone needsclick" id="dropzone-demo">
                <div class="dz-message needsclick">
                    Drop files here or click to upload
                    <span class="note needsclick">(This is just a demo dropzone. Selected files are
                        <strong>not</strong> actually uploaded.)</span>
                </div>
                <div class="fallback">
                    <input name="file" type="file" multiple>
                </div>
            </form>
        </div>
    </div>

    <div class="card mb-4">
        <h6 class="card-header">
            Flow.js
        </h6>
        <div class="card-body">
            <div class="flow-error alert alert-danger">
                Your browser, unfortunately, is not supported by Flow.js. The library requires support for
                <a href="http://www.w3.org/TR/FileAPI/">the HTML5 File API</a> along with
                <a href="http://www.w3.org/TR/FileAPI/#normalization-of-params">file slicing</a>.
            </div>

            <div class="flow-drop py-5 px-3" ondragenter="$(this).addClass('flow-dragover')" ondragend="$(this).removeClass('flow-dragover')" ondrop="$(this).removeClass('flow-dragover')">
                <h4>Drop files here to upload or</h4>
                <button type="button" class="flow-browse btn btn-secondary">Select from your computer</button>
                <button type="button" class="flow-browse-image btn btn-secondary">Select images</button>
                <button type="button" class="flow-browse-folder btn btn-secondary">Select folder</button>
            </div>

            <div class="flow-progress media d-none mt-4">
                <div class="mr-3">
                    <button type="button" onclick="r.upload(); return(false);" class="progress-resume-link btn icon-btn btn-primary">
                        <i class="ion ion-md-play"></i>
                    </button>
                    <button type="button" onclick="r.pause(); return(false);" class="progress-pause-link btn icon-btn btn-warning">
                        <i class="ion ion-md-pause"></i>
                    </button>
                    <button type="button" onclick="r.cancel(); return(false);" class="progress-cancel-link btn icon-btn btn-danger">
                        <i class="ion ion-md-close"></i>
                    </button>
                </div>
                <div class="media-body align-self-center">
                    <div class="progress-container progress">
                        <div class="progress-bar"></div>
                    </div>
                </div>
            </div>

            <ul class="flow-list list-group d-none mt-4"></ul>
        </div>
    </div>
@endsection