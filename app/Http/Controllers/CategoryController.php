<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function list()
    {
        return Inertia::render('Categories/List', [
            'categories' => Category::orderBy('order')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/AddEdit');
    }

    public function update(Category $category)
    {
        return Inertia::render('Categories/AddEdit', [
            'category' => $category,
        ]);
    }

    public function store(CategoryRequest $request, ?Category $category = null)
    {
        $request->updateOrCreate($category);

        return redirect()->route('categories.list')->with(['success' => 'Category saved.']);
    }


        public function delete(Category $category)
        {
       
            foreach ($category->products as $product) {
               
                foreach ($product->images as $image) {
                 
                    if (Storage::disk('public')->exists($image->path)) {
                        Storage::disk('public')->delete($image->path);
                    }
              
                    $image->delete();
                }
             
                $product->delete();
            }
   
            $category->delete();
    
            return redirect()->route('categories.list')->with('success', 'Category and all associated products and images deleted successfully.');
        }
    
    
    
    
}