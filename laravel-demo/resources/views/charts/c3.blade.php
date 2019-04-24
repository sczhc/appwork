@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/c3/c3.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/d3/d3.js') }}"></script>
    <script src="{{ mix('/vendor/libs/c3/c3.js') }}"></script>
    
    <script src="{{ mix('/js/charts_c3.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> C3.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <div id="c3-graph" style="height: 250px"></div>
        <div id="c3-spline" style="height: 250px"></div>
        <div id="c3-area" style="height: 250px"></div>
        <div id="c3-bar" style="height: 250px"></div>
        <div id="c3-scatter" style="height: 250px"></div>
        <div id="c3-donut" style="height: 250px"></div>
        <div id="c3-gauge" style="height: 250px"></div>
    </div>
@endsection