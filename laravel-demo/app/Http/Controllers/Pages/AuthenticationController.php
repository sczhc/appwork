<?php

namespace App\Http\Controllers\Pages;

use App\User;
use App\Http\Controllers\Controller;

class AuthenticationController extends Controller
{
    public function emailConfirm()
    {
        return view('pages.authentication.email-confirm', ['title' => 'Email confirm - Pages']);
    }

    public function lockScreenV1()
    {
        return view('pages.authentication.lock-screen-v1', ['title' => 'Lock screen v1 - Pages']);
    }

    public function lockScreenV2()
    {
        return view('pages.authentication.lock-screen-v2', ['title' => 'Lock screen v2 - Pages']);
    }

    public function loginAndRegister()
    {
        return view('pages.authentication.login-and-register', ['title' => 'Login + Register - Pages']);
    }

    public function loginV1()
    {
        return view('pages.authentication.login-v1', ['title' => 'Login v1 - Pages']);
    }

    public function loginV2()
    {
        return view('pages.authentication.login-v2', ['title' => 'Login v2 - Pages']);
    }

    public function loginV3()
    {
        return view('pages.authentication.login-v3', ['title' => 'Login v3 - Pages']);
    }

    public function passwordReset()
    {
        return view('pages.authentication.password-reset', ['title' => 'Password reset - Pages']);
    }

    public function registerV1()
    {
        return view('pages.authentication.register-v1', ['title' => 'Register v1 - Pages']);
    }

    public function registerV2()
    {
        return view('pages.authentication.register-v2', ['title' => 'Register v2 - Pages']);
    }

    public function registerV3()
    {
        return view('pages.authentication.register-v3', ['title' => 'Register v3 - Pages']);
    }

}
