<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class TicketsController extends Controller
{
    public function edit()
    {
        return view('pages.tickets.edit', ['title' => 'Edit ticket - Pages']);
    }

    public function list()
    {
        return view('pages.tickets.list', ['title' => 'Ticket list - Pages']);
    }

}
