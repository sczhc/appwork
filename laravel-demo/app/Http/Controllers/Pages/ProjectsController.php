<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class ProjectsController extends Controller
{
    public function item()
    {
        return view('pages.projects.item', ['title' => 'Project item - Pages']);
    }

    public function list()
    {
        return view('pages.projects.list', ['title' => 'Project list - Pages']);
    }

}
