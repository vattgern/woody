<?php

namespace App\Models;

use App\Models\Admin;
use App\Models\Snippet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Type extends Model
{
    use HasFactory;

    // Пользователь сниппета
    public function admin() {
        return $this->hasOne(Admin::class);
    }

    // Сниппет типа
    public function snippet() {
        return $this->belongsTo(Snippet::class);
    }
}
