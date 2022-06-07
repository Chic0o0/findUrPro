<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adds extends Model
{
    use HasFactory;
    public $fillable = ['user_id', 'photo', 'text', 'title', 'prize'];

    public function Adds(){
        return $this ->hasMany("App\Models\Adds");
    }
}
