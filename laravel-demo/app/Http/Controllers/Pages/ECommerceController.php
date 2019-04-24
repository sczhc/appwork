<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class ECommerceController extends Controller
{
    public function orderDetail()
    {
        return view('pages.e-commerce.order-detail', ['title' => 'Order detail - Pages']);
    }

    public function orderList()
    {
        return view('pages.e-commerce.order-list', ['title' => 'Order list - Pages']);
    }

    public function productEdit()
    {
        return view('pages.e-commerce.product-edit', ['title' => 'Product edit - Pages']);
    }

    public function productItem()
    {
        return view('pages.e-commerce.product-item', ['title' => 'Product item - Pages']);
    }

    public function productList()
    {
        return view('pages.e-commerce.product-list', ['title' => 'Product list - Pages']);
    }

}
