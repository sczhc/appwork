<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class MiscController extends Controller
{
    public function blockui()
    {
        return view('misc.blockui', ['title' => 'BlockUI - Miscellaneous']);
    }

    public function clipboardjs()
    {
        return view('misc.clipboardjs', ['title' => 'Clipboard.js - Miscellaneous']);
    }

    public function idleTimer()
    {
        return view('misc.idle-timer', ['title' => 'Idle Timer - Miscellaneous']);
    }

    public function ladda()
    {
        return view('misc.ladda', ['title' => 'Ladda - Miscellaneous']);
    }

    public function masonry()
    {
        return view('misc.masonry', ['title' => 'Masonry - Miscellaneous']);
    }

    public function numeraljs()
    {
        return view('misc.numeraljs', ['title' => 'Numeral.js - Miscellaneous']);
    }

    public function perfectScrollbar()
    {
        return view('misc.perfect-scrollbar', ['title' => 'Perfect Scrollbar - Miscellaneous']);
    }

    public function spinkit()
    {
        return view('misc.spinkit', ['title' => 'SpinKit - Miscellaneous']);
    }

    public function vegasjs()
    {
        return view('misc.vegasjs', ['title' => 'Vegas.js - Miscellaneous']);
    }

}
