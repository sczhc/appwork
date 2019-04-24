<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class LayoutExamplesController extends Controller
{
    public function blank()
    {
        return view('layout-examples.blank', ['title' => 'Blank layout - Layouts']);
    }

    public function helpers()
    {
        return view('layout-examples.helpers', ['title' => 'Layout helpers - Layouts']);
    }

    public function horizontalSidenav()
    {
        return view('layout-examples.horizontal-sidenav', ['title' => 'Horizontal sidenav - Layouts']);
    }

    public function layout1Flex()
    {
        return view('layout-examples.layout-1-flex', ['title' => 'Layout 1 (Flex) - Layouts']);
    }

    public function layout1()
    {
        return view('layout-examples.layout-1', ['title' => 'Layout 1 - Layouts']);
    }

    public function layout2Flex()
    {
        return view('layout-examples.layout-2-flex', ['title' => 'Layout 2 (Flex) - Layouts']);
    }

    public function layout2()
    {
        return view('layout-examples.layout-2', ['title' => 'Layout 2 - Layouts']);
    }

    public function options()
    {
        return view('layout-examples.options', ['title' => 'Layout options - Layouts']);
    }

    public function withoutNavbarFlex()
    {
        return view('layout-examples.without-navbar-flex', ['title' => 'Without navbar (Flex) - Layouts']);
    }

    public function withoutNavbar()
    {
        return view('layout-examples.without-navbar', ['title' => 'Without navbar - Layouts']);
    }

    public function withoutSidenav()
    {
        return view('layout-examples.without-sidenav', ['title' => 'Without sidenav - Layouts']);
    }

}
