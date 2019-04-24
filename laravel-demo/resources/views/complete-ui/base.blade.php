@extends('layouts.complete-ui')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/js/dropdown-hover.js') }}"></script>
    <script src="{{ mix('/vendor/js/mega-dropdown.js') }}"></script>
    <script src="{{ mix('/vendor/js/sidenav.js') }}"></script>
    <script src="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
@endsection

@section('content')
    @include('complete-ui.typography')
    @include('complete-ui.utilities')
    @include('complete-ui.buttons')
    @include('complete-ui.badges')
    @include('complete-ui.button-groups')
    @include('complete-ui.button-dropdowns')
    @include('complete-ui.dropdowns')
    @include('complete-ui.navs')
    @include('complete-ui.pagination')
    @include('complete-ui.progress-bars')
    @include('complete-ui.list-groups')
    @include('complete-ui.alerts')
    @include('complete-ui.tooltips-and-popovers')
    @include('complete-ui.modals')
    @include('complete-ui.breadcrumbs')
    @include('complete-ui.form-controls')
    @include('complete-ui.custom-checkboxes-and-radios')
    @include('complete-ui.custom-select')
    @include('complete-ui.file-browser')
    @include('complete-ui.forms')
    @include('complete-ui.input-groups')
    @include('complete-ui.switchers')
    @include('complete-ui.app-brand')
    @include('complete-ui.navbar')
    @include('complete-ui.sidenav')
    @include('complete-ui.footer')
    @include('complete-ui.tables')
    @include('complete-ui.media')
    @include('complete-ui.thumbnails')
    @include('complete-ui.cards')
    @include('complete-ui.accordion')
    @include('complete-ui.carousel')
@endsection