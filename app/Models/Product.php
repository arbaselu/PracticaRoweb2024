<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',          
        'description',
        'price',
        'path',
        'category_id',
    ];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}
