<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourites extends Model
{
    use HasFactory;
    public $fillable = ['name',
    'surname',
    'email',
    'number',
    'CP',
    'adress',
    'city',
    'country',
    'password',
    'pro'];

    public function User(){
        return $this ->hasMany("App\Models\User");
    }
}
