@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/datatables/datatables.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>
    <script src="{{ mix('/vendor/libs/datatables/datatables.js') }}"></script>
    
    <script src="{{ mix('/js/pages_tickets_list.js') }}"></script>
@endsection

@section('content')
    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
        <div>Tickets</div>
        <button type="button" class="btn btn-primary btn-round d-block"><span class="ion ion-md-add"></span>&nbsp; Create ticket</button>
    </h4>

    <!-- Filters -->
    <div class="ui-bordered px-4 pt-4 mb-4">
        <div class="form-row">
            <div class="col-md mb-4">
                <label class="form-label">Priority</label>
                <select class="custom-select">
                    <option>Any</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            <div class="col-md mb-4">
                <label class="form-label">Status</label>
                <select class="custom-select">
                    <option>Any</option>
                    <option>Open</option>
                    <option>Reopened</option>
                    <option>In progress</option>
                    <option>Closed</option>
                </select>
            </div>
            <div class="col-md mb-4">
                <label class="form-label">Created date</label>
                <input type="text" id="tickets-list-created" class="form-control">
            </div>
            <div class="col-md col-xl-2 mb-4">
                <label class="form-label d-none d-md-block">&nbsp;</label>
                <button type="button" class="btn btn-secondary btn-block">Show</button>
            </div>
        </div>
    </div>
    <!-- / Filters -->

    <div class="card">
        <div class="card-datatable table-responsive">
            <table id="tickets-list" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Ticket ID</th>
                        <th>Subject</th>
                        <th>Created at</th>
                        <th>Last update</th>
                        <!-- <th>Type</th> -->
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection