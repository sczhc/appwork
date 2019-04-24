@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/chartist/chartist.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/chartist/chartist.js') }}"></script>
    
    <script src="{{ mix('/js/charts_chartist.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Chartist
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <div id="chartist-graph" style="height: 250px"></div>
        <div id="chartist-bi-polar" style="height: 250px"></div>
        <div id="chartist-bars" style="height: 250px"></div>
        <div id="chartist-h-bars" style="height: 250px"></div>
        <div id="chartist-pie" class="ct-negative-labels" style="height: 250px"></div>
        <div id="chartist-gauge" style="height: 250px"></div>
    </div>
@endsection