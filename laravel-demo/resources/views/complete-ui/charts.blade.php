@extends('layouts.complete-ui')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/flot/flot.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/c3/c3.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/chartist/chartist.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/morris/morris.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <!-- NOTE: When using Google Maps on your own site you MUST get your own API key:
                         https://developers.google.com/maps/documentation/javascript/get-api-key
                         After you got the key paste it in the URL below. -->
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyCHtdj4L66c05v1UZm-nte1FzUEAN6GKBI"></script>
    <script src="{{ mix('/vendor/libs/gmaps/gmaps.js') }}"></script>
    <script src="{{ mix('/vendor/libs/eve/eve.js') }}"></script>
    <script src="{{ mix('/vendor/libs/raphael/raphael.js') }}"></script>
    <script src="{{ mix('/vendor/libs/mapael/mapael.js') }}"></script>
    <script src="{{ mix('/vendor/libs/mapael/maps/world_countries.js') }}"></script>
    <script src="{{ mix('/vendor/libs/flot/flot.js') }}"></script>
    <script src="{{ mix('/vendor/libs/d3/d3.js') }}"></script>
    <script src="{{ mix('/vendor/libs/c3/c3.js') }}"></script>
    <script src="{{ mix('/vendor/libs/chartist/chartist.js') }}"></script>
    <script src="{{ mix('/vendor/libs/chartjs/chartjs.js') }}"></script>
    <script src="{{ mix('/vendor/libs/morris/morris.js') }}"></script>
    <script src="{{ mix('/vendor/libs/sparkline/sparkline.js') }}"></script>
@endsection

@section('content')
    @include('complete-ui.gmaps')
    @include('complete-ui.mapael')
    @include('complete-ui.flot')
    @include('complete-ui.c3')
    @include('complete-ui.chartist')
    @include('complete-ui.chartjs')
    @include('complete-ui.morris')
    @include('complete-ui.sparkline')
@endsection