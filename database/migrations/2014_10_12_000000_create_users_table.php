<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->boolean('pro');
            $table->string('name');
            $table->string('surname');
            $table->string('email')->unique();
            $table->unsignedBigInteger('number');
            $table->unsignedBigInteger('CP');
            $table->string('adress');
            $table->string('city');
            $table->string('country');
            $table->string('password');
            $table->rememberToken(); // not used, its automatic in breeze full version
            $table->timestamp('email_verified_at')->nullable(); // not used, its automatic in breeze full version
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
