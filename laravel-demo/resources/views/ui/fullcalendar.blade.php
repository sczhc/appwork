@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/fullcalendar/fullcalendar.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ mix('/vendor/libs/fullcalendar/fullcalendar.js') }}"></script>
    
    <script src="{{ mix('/js/ui_fullcalendar.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Fullcalendar
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <!-- Event modal -->
    <form class="modal modal-top fade" id="fullcalendar-default-view-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add an event</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Type</label>
                        <select class="custom-select">
                            <option value="" selected>Default</option>
                            <option value="fc-event-success">Success</option>
                            <option value="fc-event-info">Info</option>
                            <option value="fc-event-warning">Warning</option>
                            <option value="fc-event-danger">Danger</option>
                            <option value="fc-event-dark">Dark</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default md-btn-flat" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary md-btn-flat">Save</button>
                </div>
            </div>
        </div>
    </form>
    <!-- / Event modal -->

    <div class="card mb-4">
        <div class="card-body">
            <div id='fullcalendar-default-view'></div>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <div id='fullcalendar-list-view'></div>
        </div>
    </div>
@endsection