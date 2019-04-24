@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/datatables/datatables.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/nouislider/nouislider.css') }}">
    
    <!-- Page -->
    <link rel="stylesheet" href="{{ mix('/vendor/css/pages/products.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/datatables/datatables.js') }}"></script>
    <script src="{{ mix('/vendor/libs/numeral/numeral.js') }}"></script>
    <script src="{{ mix('/vendor/libs/nouislider/nouislider.js') }}"></script>
    
    <script src="{{ mix('/js/pages_e-commerce_product-list.js') }}"></script>
@endsection

@section('content')
    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
        <div>Products</div>
        <button type="button" class="btn btn-primary btn-round d-block"><span class="ion ion-md-add"></span>&nbsp; Add product</button>
    </h4>

    <!-- Filters -->
    <div class="ui-bordered px-4 pt-4 mb-4">
        <div class="form-row">
            <div class="col-md mb-4">
                <label class="form-label pb-1">Sales <span id="product-sales-slider-value" class="text-muted font-weight-normal ml-2"></span></label>
                <div id="product-sales-slider" class="product-list-slider my-3 mx-2"></div>
            </div>
            <div class="col-md mb-4">
                <label class="form-label pb-1">Price <span id="product-price-slider-value" class="text-muted font-weight-normal ml-2"></span></label>
                <div id="product-price-slider" class="product-list-slider my-3 mx-2"></div>
            </div>
            <div class="col-md mb-4">
                <label class="form-label">Status</label>
                <select class="custom-select">
                    <option>Any</option>
                    <option>Published</option>
                    <option>Out of stock</option>
                    <option>Pending</option>
                    <option>Hidden</option>
                </select>
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
            <table id="product-list" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>ID</th>
                        <th>In stock</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection