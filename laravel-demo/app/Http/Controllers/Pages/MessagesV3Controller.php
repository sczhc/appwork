<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class MessagesV3Controller extends Controller
{
    public function compose()
    {
        return view('pages.messages-v3.compose', ['title' => 'Compose message v3 - Pages']);
    }

    public function item()
    {
        return view('pages.messages-v3.item', ['title' => 'Message item v3 - Pages']);
    }

    public function list()
    {
        return view('pages.messages-v3.list', ['title' => 'Messages list v3 - Pages']);
    }

}
