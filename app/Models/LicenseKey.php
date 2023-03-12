<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class LicenseKey extends Model
{
    use HasFactory;

    // Пользователь ключа
    public function user() {
        return $this->hasOne(User::class);
    }
}
