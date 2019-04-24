@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/sparkline/sparkline.js') }}"></script>
    
    <script src="{{ mix('/js/charts_sparkline.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Sparkline
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <div id="sparkline-lines"></div>
        <div id="sparkline-bars" class="sparkline"></div>
        <div id="sparkline-tristate"></div>
        <div id="sparkline-discrete"></div>
        <div id="sparkline-bullet"></div>
        <div id="sparkline-pie"></div>
        <div id="sparkline-box"></div>
    </div>
@endsection