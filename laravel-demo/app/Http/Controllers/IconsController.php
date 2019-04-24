<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class IconsController extends Controller
{
    public function fontAwesome()
    {
        return view('icons.font-awesome', ['title' => 'Font Awesome 5 - Icons']);
    }

    public function ionicons()
    {
        return view('icons.ionicons', ['title' => 'Ionicons - Icons']);
    }

    public function linearicons()
    {
        return view('icons.linearicons', ['title' => 'Linearicons - Icons']);
    }

    public function openiconic()
    {
        return view('icons.openiconic', ['title' => 'Open Iconic - Icons']);
    }

    public function stroke7()
    {
        return view('icons.stroke7', ['title' => 'Stroke Icons 7 - Icons']);
    }

}
