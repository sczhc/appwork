@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/numeral/numeral.js') }}"></script>
    
    <script src="{{ mix('/js/misc_numeraljs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Miscellaneous /</span> Numeral.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="card">
        <div class="card-body demo-vertical-spacing">
            <p id="numeral-example-1"></p>
            <p id="numeral-example-2"></p>
            <p id="numeral-example-3"></p>
            <p id="numeral-example-4"></p>
            <p id="numeral-example-5"></p>
        </div>
    </div>
@endsection