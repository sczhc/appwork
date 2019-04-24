@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/plyr/plyr.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/plyr/plyr.js') }}"></script>
    
    <script src="{{ mix('/js/ui_media-player.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Plyr
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Video</h5>

    <div id="plyr-video-player" data-type="youtube" data-video-id="bTqVqk7FSmY"></div>

    <hr class="border-light container-m--x my-4">

    <h5 class="font-weight-bold pt-1 pb-1 mb-4">Audio</h5>

    <audio id="plyr-audio-player" controls>
        <source src="/audio/Water_Lily.mp3" type="audio/mp3">
    </audio>
@endsection