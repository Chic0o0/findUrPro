@extends('productos.layout')
 
@section('content')
<br>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Añadir usuarios a favoritos</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="{{ route('productos.create') }}"> Crear Nuevo Producto</a>
            </div>
        </div>
    </div>
<br>
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
   
    <table class="table table-bordered">
        <tr>
            <th>user_Id</th>
            <th>Nombre</th>
            <th>passedContracts</th>
            <th width="280px">CurrentContracts</th>
            <th width="280px">calification</th>
        </tr>
        @foreach ($productos as $producto)
        <tr>
            <td>{{ $producto->user_id }}</td>
            <td>{{ $producto->name }}</td>
            <td>{{ $producto->passedContracts }}</td>
            <td>{{ $producto->currContracts }}</td>
            <td >{{ $producto->calification }}</td>
            <td style="width: 400px">
                <form action="{{ route('productos.destroy',$producto->id) }}" method="POST">
   
                    <a class="btn btn-info" href="{{ route('productos.show',$producto->id) }}">Ver</a>
    
                    <a class="btn btn-warning" href="{{ route('productos.edit',$producto->id) }}">Editar</a>
   
                    @csrf
                    @method('DELETE')
      
                    <button type="submit" class="btn btn-danger">Borrar</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>
  
    {!! $productos->links() !!}
      
@endsection