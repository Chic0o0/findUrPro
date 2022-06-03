<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'number' => ['required', 'max:255'],
            'CP' => ['required', 'string', 'max:255'],
            'adress' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'password' => ['required', Rules\Password::defaults()
                // ,'confirmed'
            ],
            'pro' => ['required', 'bool']
        ]);

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'number' => $request->number,
            'CP' => $request->CP,
            'adress' => $request->adress,
            'city' => $request->city,
            'country' => $request->country,
            'password' => Hash::make($request->password),
            'pro' => $request->pro
        ]);

        print_r($user);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
