<?php

namespace App\Models;

use App\Models\Type;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Snippet extends Model
{
    use HasFactory;

    // Пользователь сниппета
    public function user() {
        return $this->hasOne(User::class);
    }

    // Тип сниппета
    public function type() {
        return $this->hasOne(Type::class);
    }

    // Админ сниппета
    public function admin() {
        return $this->hasOne(Admin::class);
    }
}
