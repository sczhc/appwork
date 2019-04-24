<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class TablesController extends Controller
{
    public function bootstrapSortable()
    {
        return view('tables.bootstrap-sortable', ['title' => 'Bootstrap Sortable - Tables']);
    }

    public function bootstrapTable()
    {
        return view('tables.bootstrap-table', ['title' => 'Bootstrap table - Tables']);
    }

    public function bootstrap()
    {
        return view('tables.bootstrap', ['title' => 'Bootstrap - Tables']);
    }

    public function datatables()
    {
        return view('tables.datatables', ['title' => 'DataTables - Tables']);
    }

}
