<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class MessagesV2Controller extends Controller
{
    public function compose()
    {
        return view('pages.messages-v2.compose', ['title' => 'Compose message v2 - Pages']);
    }

    public function item()
    {
        return view('pages.messages-v2.item', ['title' => 'Message item v2 - Pages']);
    }

    public function list()
    {
        return view('pages.messages-v2.list', ['title' => 'Messages list v2 - Pages']);
    }

}
