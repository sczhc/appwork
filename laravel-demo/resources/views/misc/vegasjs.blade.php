@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/vegas/vegas.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/vegas/vegas.js') }}"></script>
    
    <script src="{{ mix('/js/misc_vegasjs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Miscellaneous /</span> Vegas.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="demo-vertical-spacing">
        <div id="vegas-example" style="min-height: 500px;"></div>

        <div id="vegas-dark-overlay-example" class="vegas-overlay-black">
            <h3 class="text-center text-white py-4 my-5">Dark overlay</h3>
        </div>

        <div id="vegas-light-overlay-example" class="vegas-overlay-white">
            <h3 class="text-default text-center py-4 my-5">Light overlay</h3>
        </div>

        <div id="vegas-fixed-bg-example" class="vegas-fixed-background">
            <h3 class="text-center text-white py-4 my-5">Fixed background</h3>
        </div>
    </div>
@endsection