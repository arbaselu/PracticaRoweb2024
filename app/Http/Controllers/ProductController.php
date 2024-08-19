<?php
namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function list()
    {
        return Inertia::render('Products/List', [
            'products' => Product::with('images')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/AddEdit');
    }

    public function update(Product $product)
    {
        return Inertia::render('Products/AddEdit', [
            'product' => $product,
        ]);
    }

    public function store(ProductRequest $request, Product $product = null)
    {
       
        $product = $request->updateOrCreate($product);

        if ($request->hasFile('image')) {
         
            if ($product->images()->exists()) {
                $oldImage = $product->images->first(); 
                Storage::disk('public')->delete($oldImage->path);
                $oldImage->delete();
            }

           
            $file = $request->file('image');
            $path = $file->store('product_images', 'public');

            ProductImage::create([
                'product_id' => $product->id,
                'path' => $path,
            ]);
        }

        return redirect()->route('products.list')->with('success', 'Product saved successfully');
    }

    public function delete(Product $product)
    {
       
        foreach ($product->images as $image) {
           
            if (Storage::disk('public')->exists($image->path)) {
                Storage::disk('public')->delete($image->path);
            }
     
            $image->delete();
        }

        $product->delete();
    
        return redirect()->route('products.list')->with('success', 'Product deleted successfully.');
    }
    
    
}
