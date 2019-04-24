@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/morris/morris.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/eve/eve.js') }}"></script>
    <script src="{{ mix('/vendor/libs/raphael/raphael.js') }}"></script>
    <script src="{{ mix('/vendor/libs/morris/morris.js') }}"></script>
    
    <script src="{{ mix('/js/charts_morrisjs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Morris.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <div id="morrisjs-graph" style="height: 250px"></div>
        <div id="morrisjs-bars" style="height: 250px"></div>
        <div id="morrisjs-area" style="height: 250px"></div>
        <div id="morrisjs-donut" style="height: 250px"></div>
    </div>
@endsection