<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\mFavourites;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = mFavourites::latest()->paginate(5);
  
        return view('productos.index',compact('productos'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

   public function create()
    {
        return view('productos.create');
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'name' => 'required',
            'passedContracts' => 'required',
            'currContracts' => 'required',
            'calification' => 'required'
        ]);
  
        mFavourites::create($request->all());
   
        return redirect()->route('productos.index')
                        ->with('success','Producto creado correctamente.');
    }
   
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(mFavourites $producto)
    {
        return view('productos.show',compact('producto'));
    }
   
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(mFavourites $producto)
    {
        return view('productos.edit',compact('producto'));
    }
  
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, mFavourites $producto)
    {
        $request->validate([
            'user_id' => 'required',
            'name' => 'required',
            'passedContracts' => 'required',
            'currContracts' => 'required',
            'calification' => 'required'
        ]);
  
        $producto->update($request->all());
  
        return redirect()->route('productos.index')
                        ->with('success','Producto actualizado correctamente');
    }
  
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(mFavourites $producto)
    {
        $producto->delete();
  
        return redirect()->route('productos.index')
                        ->with('success','Producto borrado correctamente');
    }
    }