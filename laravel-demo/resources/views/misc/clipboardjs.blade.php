@extends('layouts.layout-2')

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/clipboard/clipboard.js') }}"></script>
    
    <script src="{{ mix('/js/misc_clipboardjs.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Miscellaneous /</span> Clipboard.js
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="card">
        <div class="card-body">
            <textarea id="clipboard-example" rows="3" class="form-control">Lorem ipsum dolor sit amet, nec an eros dicam, vero apeirian ei est. Eu duo stet adhuc insolens, movet vitae audire duo an, mei in delectus luptatum.</textarea>
            <br>

            <button class="clipboard-example-btn btn btn-default" data-clipboard-action="copy" data-clipboard-target="#clipboard-example">Copy</button>
            <button class="clipboard-example-btn btn btn-default" data-clipboard-action="cut" data-clipboard-target="#clipboard-example">Cut</button>
        </div>
    </div>
@endsection