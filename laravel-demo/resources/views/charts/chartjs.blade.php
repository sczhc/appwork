@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/chartjs/chartjs.js') }}"></script>
    
    <script src="{{ mix('/js/charts_chartjs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Chart.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div class="demo-vertical-spacing-lg">
        <canvas id="chart-graph" height="250" class="chartjs-demo"></canvas>
        <canvas id="chart-bars" height="250" class="chartjs-demo"></canvas>
        <canvas id="chart-radar" height="250" class="chartjs-demo"></canvas>
        <canvas id="chart-polar-area" height="250" class="chartjs-demo"></canvas>
        <canvas id="chart-pie" height="250" class="chartjs-demo"></canvas>
        <canvas id="chart-doughnut" height="250" class="chartjs-demo"></canvas>
    </div>
@endsection