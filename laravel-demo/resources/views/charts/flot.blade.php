@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/flot/flot.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/flot/flot.js') }}"></script>
    
    <script src="{{ mix('/js/charts_flot.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Flot.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <div id="flot-graph" style="height: 250px"></div>
        <div id="flot-bars" style="height: 250px"></div>
        <div id="flot-categories" style="height: 250px"></div>
        <div id="flot-pie" style="height: 250px"></div>
    </div>
@endsection