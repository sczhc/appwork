<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class ChartsController extends Controller
{
    public function c3()
    {
        return view('charts.c3', ['title' => 'C3.js - Charts']);
    }

    public function chartist()
    {
        return view('charts.chartist', ['title' => 'Chartist - Charts']);
    }

    public function chartjs()
    {
        return view('charts.chartjs', ['title' => 'Chart.js - Charts']);
    }

    public function flot()
    {
        return view('charts.flot', ['title' => 'Flot.js - Charts']);
    }

    public function gmaps()
    {
        return view('charts.gmaps', ['title' => 'GMaps - Charts']);
    }

    public function mapael()
    {
        return view('charts.mapael', ['title' => 'Mapael - Charts']);
    }

    public function morrisjs()
    {
        return view('charts.morrisjs', ['title' => 'Morris.js - Charts']);
    }

    public function sparkline()
    {
        return view('charts.sparkline', ['title' => 'Sparkline - Charts']);
    }

}
