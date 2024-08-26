<?php
namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function list()
    {
        $categories = Category::all();
        return Inertia::render('Products/List', [
            'products' => Product::with('images')->get(),
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        
        $categories = Category::all();
 
        return Inertia::render('Products/AddEdit', [
            'categories' => $categories,
            'product' => null,
        ]);
    }

    public function edit(Product $product)
{
    // Ia toate categoriile pentru a popula dropdown-ul din formular
    $categories = Category::all();

    // Trimite datele produsului și categoriile la view-ul de editare
    return Inertia::render('Products/AddEdit', [
        'product' => $product,
        'categories' => $categories,
    ]);
}


    public function update(ProductRequest $request, Product $product)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id', // asigurăm că este un id de categorie valid
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string',
        ]);
    
        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'category_id' => $request->category_id, // asigurăm setarea `category_id`
        ]);
    
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
    
        return redirect()->route('products.list')->with('success', 'Product updated successfully');
    }
    
    public function store(ProductRequest $request)
    {
        // Creăm un nou obiect de tip Product și setăm proprietățile sale
        $product = new Product();
        $product->name = $request->get('name');
        $product->price = $request->get('price');
        $product->description = $request->get('description');
        $product->category_id = $request->get('category_id');
    
        // Salvăm produsul în baza de date pentru a obține un `id` valid
        $product->save();
    
        // Verificăm dacă există o imagine încărcată
        if ($request->hasFile('image')) {
            // Ștergem imaginea veche dacă există
            if ($product->images()->exists()) {
                $oldImage = $product->images->first(); 
                Storage::disk('public')->delete($oldImage->path);
                $oldImage->delete();
            }
    
            // Salvăm noua imagine
            $file = $request->file('image');
            $path = $file->store('product_images', 'public');
    
            // Creăm o nouă intrare în tabelul ProductImage
            ProductImage::create([
                'product_id' => $product->id,
                'path' => $path,
            ]);
        }
    
        // Redirecționăm utilizatorul înapoi la lista de produse cu un mesaj de succes
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
