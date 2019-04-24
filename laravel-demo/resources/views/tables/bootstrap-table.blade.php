@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-table/bootstrap-table.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/tableexport/tableexport.js') }}"></script>
    <script src="{{ mix('/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    
    <script src="{{ mix('/vendor/libs/bootstrap-table/bootstrap-table.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-table/extensions/export/export.js') }}"></script>
    
    <script src="{{ mix('/js/tables_bootstrap-table.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Tables /</span> Bootstrap table
    </h4>

    <div id="bootstrap-table-toolbar">
        <button id="bootstrap-table-remove" class="btn btn-danger" disabled>
            <i class="ion ion-md-close"></i> Delete
        </button>
    </div>

    <table id="bootstrap-table-example" data-toolbar="#bootstrap-table-toolbar" data-search="true" data-show-refresh="true" data-show-columns="true" data-show-export="true" data-detail-view="true" data-minimum-count-columns="2" data-show-pagination-switch="true" data-pagination="true" data-id-field="id" data-show-footer="true" data-url="/json/bootstrap-table-data.json">
    </table>
@endsection