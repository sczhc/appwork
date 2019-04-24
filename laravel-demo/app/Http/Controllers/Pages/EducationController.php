<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class EducationController extends Controller
{
    public function coursesV1()
    {
        return view('pages.education.courses-v1', ['title' => 'Courses v1 - Pages']);
    }

    public function coursesV2()
    {
        return view('pages.education.courses-v2', ['title' => 'Courses v2 - Pages']);
    }

}
