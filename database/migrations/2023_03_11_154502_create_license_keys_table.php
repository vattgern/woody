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
        Schema::create('license_keys', function (Blueprint $table) {
            $table->id();
            $table->integer('license_id')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('quota')->default(0);
            $table->string('subscription_id', 11)->nullable();
            $table->integer('images_per_month')->nullable();
            $table->string('license_key',100);
            $table->boolean('is_expired');
            $table->timestamps();
            $table->date('reset_at');
            $table->date('last_notification_at')->nullable();
            $table->date('expiration_at');
            $table->date('cancelled_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('license_keys');
    }
};
