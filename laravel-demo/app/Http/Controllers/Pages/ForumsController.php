<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class ForumsController extends Controller
{
    public function discussion()
    {
        return view('pages.forums.discussion', ['title' => 'Forum discussion - Pages']);
    }

    public function list()
    {
        return view('pages.forums.list', ['title' => 'Forum list - Pages']);
    }

    public function threads()
    {
        return view('pages.forums.threads', ['title' => 'Forum threads - Pages']);
    }

}
