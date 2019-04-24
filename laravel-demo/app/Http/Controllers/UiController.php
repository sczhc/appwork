<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class UiController extends Controller
{
    public function accordion()
    {
        return view('ui.accordion', ['title' => 'Accordion - UI elements']);
    }

    public function appBrand()
    {
        return view('ui.app-brand', ['title' => 'App brand - UI elements']);
    }

    public function badges()
    {
        return view('ui.badges', ['title' => 'Badges - UI elements']);
    }

    public function buttonGroups()
    {
        return view('ui.button-groups', ['title' => 'Button groups - UI elements']);
    }

    public function buttons()
    {
        return view('ui.buttons', ['title' => 'Buttons - UI elements']);
    }

    public function cards()
    {
        return view('ui.cards', ['title' => 'Cards - UI elements']);
    }

    public function carousel()
    {
        return view('ui.carousel', ['title' => 'Carousel - UI elements']);
    }

    public function cropper()
    {
        return view('ui.cropper', ['title' => 'Cropper.js - UI elements']);
    }

    public function dragAndDrop()
    {
        return view('ui.drag-and-drop', ['title' => 'Drag and Drop - UI elements']);
    }

    public function dropdowns()
    {
        return view('ui.dropdowns', ['title' => 'Dropdowns - UI elements']);
    }

    public function footer()
    {
        return view('ui.footer', ['title' => 'Footer - UI elements']);
    }

    public function fullcalendar()
    {
        return view('ui.fullcalendar', ['title' => 'Fullcalendar - UI elements']);
    }

    public function lightbox()
    {
        return view('ui.lightbox', ['title' => 'Lightbox - UI elements']);
    }

    public function listGroups()
    {
        return view('ui.list-groups', ['title' => 'List groups - UI elements']);
    }

    public function mediaPlayer()
    {
        return view('ui.media-player', ['title' => 'Plyr - UI elements']);
    }

    public function modals()
    {
        return view('ui.modals', ['title' => 'Modals - UI elements']);
    }

    public function navbar()
    {
        return view('ui.navbar', ['title' => 'Navbar - UI elements']);
    }

    public function navs()
    {
        return view('ui.navs', ['title' => 'Navs - UI elements']);
    }

    public function notifications()
    {
        return view('ui.notifications', ['title' => 'Notifications - UI elements']);
    }

    public function pagination()
    {
        return view('ui.pagination', ['title' => 'Pagination and breadcrumbs - UI elements']);
    }

    public function progress()
    {
        return view('ui.progress', ['title' => 'Progress bars - UI elements']);
    }

    public function sidenav()
    {
        return view('ui.sidenav', ['title' => 'Sidenav - UI elements']);
    }

    public function thumbnails()
    {
        return view('ui.thumbnails', ['title' => 'Thumbnails - UI elements']);
    }

    public function tooltips()
    {
        return view('ui.tooltips', ['title' => 'Tooltips and popovers - UI elements']);
    }

    public function tour()
    {
        return view('ui.tour', ['title' => 'Bootstrap tour - UI elements']);
    }

    public function treeview()
    {
        return view('ui.treeview', ['title' => 'Treeview - UI elements']);
    }

}
