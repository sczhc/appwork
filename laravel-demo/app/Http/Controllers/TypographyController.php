<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class TypographyController extends Controller
{
    public function typography()
    {
        return view('typography.typography', ['title' => 'Typography']);
    }

}
