<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',255);
            $table->string('last_name',255);
            $table->string('email',255)->unique();
            $table->string('additional_email',190);
            $table->string('ip',255);
            $table->string('avatar',255);
            $table->boolean('is_verified');
            $table->string('password_hash',100);
            $table->string('restore_password_key', 64);
            $table->string('auth_key',32);
            $table->string('public_key',255);
            $table->string('secret_key',255);
            $table->integer('status');

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
