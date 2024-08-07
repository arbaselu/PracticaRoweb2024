<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasTimestamps;
    public function images():HasMany{
        return $this->hasMany(ProductImage::class,'category_id','id');
    }

    public function category():BelongsTo{
        return $this->BelongsTo(Category::class);
    }
}
