<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $table = 'contact';
    
    // Definirea atributelor care pot fi completate în mod masiv
    protected $fillable = ['contact_email', 'contact_phone', 'contact_address'];
}
