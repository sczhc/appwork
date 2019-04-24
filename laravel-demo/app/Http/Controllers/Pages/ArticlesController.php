<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class ArticlesController extends Controller
{
    public function edit()
    {
        return view('pages.articles.edit', ['title' => 'Edit article - Pages']);
    }

    public function list()
    {
        return view('pages.articles.list', ['title' => 'Article list - Pages']);
    }

}
