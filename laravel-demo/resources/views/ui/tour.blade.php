@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-tour/bootstrap-tour.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/bootstrap-tour/bootstrap-tour.js') }}"></script>
    
    <script src="{{ mix('/js/ui_tour.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Bootstrap tour
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="row">
        <div class="col-sm-4" id="tour-1">
            <p>Lorem ipsum dolor sit amet, nam ut odio essent indoctum, an graecis detracto intellegat cum.</p>
        </div>
        <div class="col-sm-4">
            <p>Duo te aperiri accommodare voluptatibus.</p>
        </div>
        <div class="col-sm-4" id="tour-2">
            <p>Eam unum facilis accusata no, facer libris pro ei, vim verterem mandamus intellegam cu.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6" id="tour-3">
            <p>Qui nobis docendi ut.</p>
        </div>
        <div class="col-sm-6">
            <p>Ad sea illud quidam oblique, nec ipsum discere intellegebat an.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3">
            <p>Quem natum constituam mei ut, et vim graeco aliquam periculis.</p>
        </div>
        <div class="col-sm-3" id="tour-5">
            <p>Vix eu tritani mentitum.</p>
        </div>
        <div class="col-sm-3">
            <p>Diam iracundia definitiones ea eam.</p>
        </div>
        <div class="col-sm-3" id="tour-4">
            <p>Mel nonumes adolescens an, at duo modus partiendo maiestatis, sed integre honestatis cu.</p>
        </div>
    </div>

    <button class="btn btn-default" id="bs-tour-example">Start tour</button>
@endsection