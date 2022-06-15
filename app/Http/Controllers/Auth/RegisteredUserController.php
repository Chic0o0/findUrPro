<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use DB;

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

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }

    public function updating(Request $request, $id){

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'
            // , 'unique:users'
            ],
            'number' => ['required', 'max:255'],
            'CP' => ['required', 'string', 'max:255'],
            'adress' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'password' => ['required', Rules\Password::defaults()
            // ,'confirmed'
            ],
        ]);
    
        return DB::table('users')->where('id', $id)->update([ 
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'number' => $request->number,
            'CP' => $request->CP,
            'adress' => $request->adress,
            'city' => $request->city,
            'country' => $request->country,
            'password' => Hash::make($request->password),
        ]);
        
        return response();
        
        // DB::table('users')->update($request->all());

        // $updatable->update($request->all());

        // return $user = User::update([
        //     'name' => $request->name,
        //     'surname' => $request->surname,
        //     'email' => $request->email,
        //     'number' => $request->number,
        //     'CP' => $request->CP,
        //     'adress' => $request->adress,
        //     'city' => $request->city,
        //     'country' => $request->country,
        //     'password' => Hash::make($request->password),
        // ]);


        
        // return $user = (new User)->update([ 
        //     'name' => $request->name,
        //     'surname' => $request->surname,
        //     'email' => $request->email,
        //     'number' => $request->number,
        //     'CP' => $request->CP,
        //     'adress' => $request->adress,
        //     'city' => $request->city,
        //     'country' => $request->country,
        //     'password' => Hash::make($request->password),
        // ]); 


        // The explanation below is probably wrong, the error probably has to do with the routes and not sending a JSON

        // Here Breeze does not admit laravel update method. The error: 
        // "Symfony\\Component\\HttpFoundation\\Response::setContent(): Argument #1 ($content) must be of type ?string, Illuminate\\Routing\\ResponseFactory given, called in C:\\xampp\\htdocs\\findUrPro\\vendor\\laravel\\framework\\src\\Illuminate\\Http\\Response.php on line 72"
        // Furthermore, I havent found more documentation about a method that provides an update option on Breeze API, so its a hard lock?
    }
}
