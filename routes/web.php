<?php

use Illuminate\Support\Facades\Route;

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

Route::any('/{any}', [AngularController::class, 'index'])->where('any', '^(?!api).*$');

require __DIR__.'/auth.php';

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

// Route::resource("productos", ProductoController::class);

// Route::get("/client", [App\Http\Controllers\clientController::class, "index"])
//         ->middleware(["auth.client"])->name("client.index");

// Route::get("/pro", [App\Http\Controllers\proController::class, "index"])
//         ->middleware(["auth.pro"])->name("pro.index");