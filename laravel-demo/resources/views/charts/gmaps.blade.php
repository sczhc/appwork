@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <!-- NOTE: When using Google Maps on your own site you MUST get your own API key:
                             https://developers.google.com/maps/documentation/javascript/get-api-key
                             After you got the key paste it in the URL below. -->
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyCHtdj4L66c05v1UZm-nte1FzUEAN6GKBI"></script>
    <script src="{{ mix('/vendor/libs/gmaps/gmaps.js') }}"></script>
    
    <script src="{{ mix('/js/charts_gmaps.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Charts /</span> GMaps
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <div id="gmaps-example" style="height: 400px; width: 100%;"></div>
@endsection