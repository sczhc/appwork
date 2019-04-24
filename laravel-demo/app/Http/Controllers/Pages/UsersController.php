<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function edit()
    {
        return view('pages.users.edit', ['title' => 'Edit user - Pages']);
    }

    public function list()
    {
        return view('pages.users.list', ['title' => 'User list - Pages']);
    }

    public function view()
    {
        return view('pages.users.view', ['title' => 'View user - Pages']);
    }

}
