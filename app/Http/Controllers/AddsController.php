<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adds;
use DB;

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

    public function read(Adds $add){
        
        // $qry = 'SELECT * FROM adds WHERE user_id LIKE "1"';
        // $ppl = DB::select($qry);
        // return $ppl;

        // return $add->read();

        return $adds = DB::table('adds')->select('id','user_id','photo','text','title', 'prize')->get();

        // return $adds = Adds::read();

        return response(); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'photo' => 'required',
            'text' => 'required',
            'title' => 'required',
            'prize' => 'required'
        ]);

        return DB::table('adds')->where('id', $id)->update([ 
            'photo' => $request->photo,
            'text' => $request->text,
            'title' => $request->title,
            'prize' => $request->prize
        ]);

        return response();

        // return $user = Adds::update([
        //     'photo' =>$request->photo,
        //     'text' =>$request->text,
        //     'title' =>$request->title,
        //     'prize' =>$request->prize
        // ]);

        // return $updateable->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        // $idNumber = $id;
        // return $add = DB::table('adds')->where('id', $id)->delete();
        // return $add = Adds::delete()->where('id', $id);
        
        // The fucking parameter does not work, this is what I can do for now
        // DB::table('adds')->delete($id);
        return DB::table('adds')->delete($id);

        return response();
    }
}