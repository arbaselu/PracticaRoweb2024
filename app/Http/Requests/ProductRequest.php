<?php
namespace App\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'category_id' => ['required', 'numeric'],
            'path' => ['nullable', 'file', 'mimes:jpeg,png,jpg,gif', 'max:2048'], 
        ];
    }

    public function updateOrCreate(?Product $product = null): Product
    {
        return Product::updateOrCreate(
            ['id' => $product->id ?? null],
            [
                'name' => $this->get('name'),
                'description' => $this->get('description'),
                'price' => $this->get('price'),
                'category_id' => $this->get('category_id'),
            ]
        );
    }
}
