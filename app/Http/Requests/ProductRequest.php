<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class ProductRequest extends FormRequest
{

    public function updateOrCreate(Product $product): Product
    {
        $product->name = $this->get('name');
        $product->price = $this->get('price');
        $product->description = $this->get('description');
        $product->category_id = $this->get('category_id');
    
        $product->save();
    
        return $product;
    }
    
}
