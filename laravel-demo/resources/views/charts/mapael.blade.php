@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/eve/eve.js') }}"></script>
    <script src="{{ mix('/vendor/libs/raphael/raphael.js') }}"></script>
    <script src="{{ mix('/vendor/libs/mapael/mapael.js') }}"></script>
    <script src="{{ mix('/vendor/libs/mapael/maps/world_countries.js') }}"></script>
    
    <script src="{{ mix('/js/charts_mapael.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> Mapael
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div id="mapael-example">
        <div class="map">Alternative content</div>
    </div>
@endsection