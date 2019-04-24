<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class CompleteUiController extends Controller
{
    public function base()
    {
        return view('complete-ui.base', ['title' => 'Base']);
    }

    public function charts()
    {
        return view('complete-ui.charts', ['title' => 'Charts']);
    }

    public function plugins()
    {
        return view('complete-ui.plugins', ['title' => 'Plugins']);
    }

}
