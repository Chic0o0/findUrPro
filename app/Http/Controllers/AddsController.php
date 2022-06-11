<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adds;

class AddsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     //
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function show($id)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function edit($id)
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {        
        $request->validate([
            'user_id' => 'required',
            'photo' => 'required',
            'text' => 'required',
            'title' => 'required',
            'prize' => 'required'
        ]);

        return $add = Adds::create([
            'user_id' =>$request->user_id,
            'photo' =>$request->photo,
            'text' =>$request->text,
            'title' =>$request->title,
            'prize' =>$request->prize
        ]);

        return response();
    }

    public function read(Request $request){
        
        Adds::read();

        return response();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adds $updateable)
    {
        $request->validate([
            'user_id' => 'required',
            'photo' => 'required',
            'text' => 'required',
            'title' => 'required',
            'prize' => 'required'
        ]);

        $updateable->update($request->all());

        return response();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Adds $destroyable)
    {
        $destroyable->delete();

        return response();
    }
}