<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class FormsController extends Controller
{
    public function controls()
    {
        return view('forms.controls', ['title' => 'Controls - Forms']);
    }

    public function customControls()
    {
        return view('forms.custom-controls', ['title' => 'Custom controls - Forms']);
    }

    public function dualListbox()
    {
        return view('forms.dual-listbox', ['title' => 'Bootstrap Dual Listbox - Forms']);
    }

    public function editors()
    {
        return view('forms.editors', ['title' => 'Editors - Forms']);
    }

    public function extras()
    {
        return view('forms.extras', ['title' => 'Extras - Forms']);
    }

    public function fileUpload()
    {
        return view('forms.file-upload', ['title' => 'File upload - Forms']);
    }

    public function inputGroups()
    {
        return view('forms.input-groups', ['title' => 'Input groups - Forms']);
    }

    public function layouts()
    {
        return view('forms.layouts', ['title' => 'Layouts and elements - Forms']);
    }

    public function pickers()
    {
        return view('forms.pickers', ['title' => 'Pickers - Forms']);
    }

    public function selects()
    {
        return view('forms.selects', ['title' => 'Selects and tags - Forms']);
    }

    public function sliders()
    {
        return view('forms.sliders', ['title' => 'Sliders - Forms']);
    }

    public function switchers()
    {
        return view('forms.switchers', ['title' => 'Switchers - Forms']);
    }

    public function typeahead()
    {
        return view('forms.typeahead', ['title' => 'Typeahead - Forms']);
    }

    public function validation()
    {
        return view('forms.validation', ['title' => 'jQuery Validation - Forms']);
    }

    public function wizard()
    {
        return view('forms.wizard', ['title' => 'SmartWizard - Forms']);
    }

}
