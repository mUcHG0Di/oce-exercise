<?php

use App\Http\Controllers\ScreenOneController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/home', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return inertia('dashboard');
    })->name('dashboard');

    Route::get('/screen-1', function () {
        return inertia('screen-1');
    });

    Route::get('/screen-1/books', [ScreenOneController::class, 'index']);

    Route::get('/screen-2', function () {
        return inertia('screen-2');
    });

    Route::get('/screen-3', function () {
        return inertia('screen-3');
    });

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
