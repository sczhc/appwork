<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class DashboardsController extends Controller
{
    public function dashboard2()
    {
        return view('dashboards.dashboard-2', ['title' => 'Dashboard 2 - Dashboards']);
    }

    public function dashboard3()
    {
        return view('dashboards.dashboard-3', ['title' => 'Dashboard 3 - Dashboards']);
    }

    public function dashboard4()
    {
        return view('dashboards.dashboard-4', ['title' => 'Dashboard 4 - Dashboards']);
    }

    public function dashboard5()
    {
        return view('dashboards.dashboard-5', ['title' => 'Dashboard 5 - Dashboards']);
    }

    public function dashboard1()
    {
        return view('dashboards.dashboard-1', ['title' => 'Dashboard 1 - Dashboards']);
    }

}
