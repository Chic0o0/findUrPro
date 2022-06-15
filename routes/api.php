<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('api/user', function (Request $request) {
    return $request->user();
});

// Idea to use more middlewares went wrong
// Route::middleware(['auth:sanctum'])->get('api/adds', function (Request $request) {
//     return $request->adds();
// });