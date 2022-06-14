<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AddsController;

// Routes for adds table

Route::post('api/cAdd', [AddsController::class, 'create'])
                ->middleware('auth')
                ->name('createAdd');

Route::get('api/rAdd', [AddsController::class, 'read'])
                ->middleware('auth')
                ->name('readAdd');

Route::post('api/uAdd{id}', [AddsController::class, 'update'])
                ->middleware('auth')
                ->name('updateAdd');

Route::post('api/dAdd{id}', [AddsController::class, 'delete'])
                ->middleware('auth')
                ->name('deleteAdd');

// Routes for favourites table (in production)

// Route::post('api/cFav', [FavouritesController::class, 'create'])
//                 ->middleware('auth')
//                 ->name('createFav');

// Route::get('api/rFav', [FavouritesController::class, 'read'])
//                 ->middleware('auth')
//                 ->name('readFav');

// Route::post('api/uFav', [FavouritesController::class, 'update'])
//                 ->middleware('auth')
//                 ->name('updateFav');

// Route::post('api/dFav', [FavouritesController::class, 'delete'])
//                 ->middleware('auth')
//                 ->name('deleteFav');