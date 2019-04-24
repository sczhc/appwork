@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/typeahead-js/typeahead.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    
    <script src="{{ mix('/js/forms_typeahead.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Forms /</span> Typeahead
    </h4>

    <div class="card mb-4">
        <div class="card-body">
            <label class="form-label">Enter a country name:</label>
            <input id="typeahead-input" class="form-control" type="text" autocomplete="off">
        </div>
    </div>
@endsection