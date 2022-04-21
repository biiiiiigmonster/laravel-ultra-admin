<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/dashboard/analysis');

Route::get('/dashboard/analysis', function () {
    return Inertia::render('Dashboard/Analysis');
});

Route::get('/auth/login', function () {
    return Inertia::render('Auth/Login');
});
