<?php

namespace App\Models;

use App\Models\Type;
use App\Models\Snippet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Model
{
    use HasFactory;

    // Сниппет админа
    public function snippet() {
        return $this->belongsTo(Snippet::class);
    }

    // Тип админа
    public function type() {
        return $this->belongsTo(Type::class);
    }
}
