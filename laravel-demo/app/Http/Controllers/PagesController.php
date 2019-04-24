<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    public function accountSettings()
    {
        return view('pages.account-settings', ['title' => 'Account settings - Pages']);
    }

    public function chat()
    {
        return view('pages.chat', ['title' => 'Chat - Pages']);
    }

    public function clients()
    {
        return view('pages.clients', ['title' => 'Clients - Pages']);
    }

    public function contacts()
    {
        return view('pages.contacts', ['title' => 'Contacts - Pages']);
    }

    public function faq()
    {
        return view('pages.faq', ['title' => 'FAQ - Pages']);
    }

    public function fileManager()
    {
        return view('pages.file-manager', ['title' => 'File manager - Pages']);
    }

    public function gallery()
    {
        return view('pages.gallery', ['title' => 'Gallery - Pages']);
    }

    public function helpCenter()
    {
        return view('pages.help-center', ['title' => 'Help center - Pages']);
    }

    public function invoicePrint()
    {
        return view('pages.invoice-print', ['title' => 'Invoice (Print version) - Pages']);
    }

    public function invoice()
    {
        return view('pages.invoice', ['title' => 'Invoice - Pages']);
    }

    public function kanbanBoard()
    {
        return view('pages.kanban-board', ['title' => 'Kanban board - Pages']);
    }

    public function pricing()
    {
        return view('pages.pricing', ['title' => 'Pricing - Pages']);
    }

    public function profileV1()
    {
        return view('pages.profile-v1', ['title' => 'Profile v1 - Pages']);
    }

    public function profileV2()
    {
        return view('pages.profile-v2', ['title' => 'Profile v2 - Pages']);
    }

    public function searchResults()
    {
        return view('pages.search-results', ['title' => 'Search results - Pages']);
    }

    public function taskList()
    {
        return view('pages.task-list', ['title' => 'Task list - Pages']);
    }

    public function teams()
    {
        return view('pages.teams', ['title' => 'Teams - Pages']);
    }

    public function vacancies()
    {
        return view('pages.vacancies', ['title' => 'Vacancies - Pages']);
    }

    public function voting()
    {
        return view('pages.voting', ['title' => 'Voting - Pages']);
    }

}
