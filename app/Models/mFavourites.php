<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mFavourites extends Model
{
    use HasFactory;
    public $fillable = ["user_id", "name", "passedContracts", "currContracts", "calification"];

    public function User(){
        return $this ->hasMany("App\Models\User");
    }
}
