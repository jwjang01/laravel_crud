<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'author'
    ];

    protected $casts = [
        'title' => 'string',
        'content' => 'string',
        'author' => 'string',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
}
