<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    use HasFactory;
    protected $table = 'hero';
    
    // Definirea atributelor care pot fi completate în mod masiv
    protected $fillable = ['media_path', 'hero_title', 'hero_description'];
}

