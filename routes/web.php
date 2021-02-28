<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;

/*Route::get('/homepage', function() {
	return Inertia::render('Home');
});*/
Route::get('/homepage', [HomeController::class, 'index'])->name('home');

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/profile', [HomeController::class, 'index'])->name('profile')->middleware('auth');
Route::get('/posts', [PostController::class, 'index'])->name('posts_list')->middleware('auth');
