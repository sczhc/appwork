@extends('layouts.layout-2')

@section('styles')
    <style>
        .masonry-grid {
            background: #f8f8f8
        }
    
        /* clearfix */
    
        .masonry-grid:after {
            content: '';
            display: block;
            clear: both;
        }
    
        /* ---- masonry-grid-item ---- */
    
        .masonry-grid-item {
            width: 160px;
            height: 120px;
            float: left;
            background: rgba(0, 0, 0, .05);
            border: 2px solid rgba(0, 0, 0, .05);
            border-radius: 5px;
        }
    
        .masonry-grid-item--width2 {
            width: 320px;
        }
    
        .masonry-grid-item--width3 {
            width: 480px;
        }
    
        .masonry-grid-item--width4 {
            width: 640px;
        }
    
        .masonry-grid-item--height2 {
            height: 200px;
        }
    
        .masonry-grid-item--height3 {
            height: 260px;
        }
    
        .masonry-grid-item--height4 {
            height: 360px;
        }
    </style>
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/masonry/masonry.js') }}"></script>
    
    <script src="{{ mix('/js/misc_masonry.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Miscellaneous /</span> Masonry
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="masonry-grid">
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height2"></div>
        <div class="masonry-grid-item masonry-grid-item--height3"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
        <div class="masonry-grid-item masonry-grid-item--width3"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
        <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height3"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height2"></div>
        <div class="masonry-grid-item masonry-grid-item--width2"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--height3"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item"></div>
        <div class="masonry-grid-item masonry-grid-item--height2"></div>
    </div>
@endsection