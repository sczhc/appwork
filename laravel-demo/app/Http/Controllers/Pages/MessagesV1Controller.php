<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class MessagesV1Controller extends Controller
{
    public function compose()
    {
        return view('pages.messages-v1.compose', ['title' => 'Compose message v1 - Pages']);
    }

    public function item()
    {
        return view('pages.messages-v1.item', ['title' => 'Message item v1 - Pages']);
    }

    public function list()
    {
        return view('pages.messages-v1.list', ['title' => 'Messages list v1 - Pages']);
    }

}
