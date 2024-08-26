<?php

namespace App\Http\Controllers;
use App\Http\Requests\HeroRequest;
use App\Http\Requests\AboutRequest;
use App\Http\Requests\ContactRequest;
use App\Models\About;
use App\Models\Category;
use App\Models\Contact;
use App\Models\HeroSection;
use App\Models\HomeGalleryImage;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index()
    {
        // Preia produsele și imaginile din galerie
        $products = Product::with('images')->get();
        $galleryImages = HomeGalleryImage::all();
        $heroSection = HeroSection::first();
        $aboutData = About::first();
        $contactData = Contact::first();
        $categories = Category::all();
        return inertia('Welcome', [
            'products' => $products,
            'galleryImages' => $galleryImages,
            'heroSection' => $heroSection,
            'aboutData'=>$aboutData,
            'contactData'=>$contactData,
            'categories'=> $categories,
        ]);
    }
    
 
    public function edit()
    {
        $products = Product::with('images')->get();
        $galleryImages = HomeGalleryImage::all();
        $heroSection = HeroSection::first();
        $aboutData = About::first();
        $contactData = Contact::first();
        return inertia('EditHome/HomeManagement', [
            'products' => $products,
            'galleryImages' => $galleryImages,
            'heroSection' => $heroSection,
            'aboutData'=> $aboutData,
            'contactData'=> $contactData,

        ]);
    }

    
    public function updateAbout(AboutRequest $request)
    {
        
        $contactData = About::first();
        $contactData->about_title= $request->input('about_title');
        $contactData->about_description = $request->input('about_description');
        $contactData->save();
        return redirect()->route('home.edit')->with('success', 'About section updated successfully!');
    }
    
    public function updateContact(ContactRequest $request)
    {

        $aboutData = Contact::first();
        $aboutData->contact_email= $request->input('contact_email');
        $aboutData->contact_phone= $request->input('contact_phone');
        $aboutData->contact_address = $request->input('contact_address');
        $aboutData->save();
        return redirect()->route('home.edit')->with('success', 'Contact section updated successfully!');
    }

    public function updateHero(HeroRequest $request)
    {
       
        $heroSection = HeroSection::first();
    
        if ($request->hasFile('media_path')) {
            $path = $request->file('media_path')->store('hero', 'public');
    
            if ($heroSection->media_path) {
                Storage::disk('public')->delete($heroSection->media_path);
            }
    
            $heroSection->media_path = $path;
        }
    
        $heroSection->hero_title = $request->input('hero_title');
        $heroSection->hero_description = $request->input('hero_description');
    
        $heroSection->save();
    
        return redirect()->route('home.edit')->with('success', 'Hero section updated successfully!');
    }


    public function uploadGallery(Request $request)
    {

        if (!$request->hasFile('images')) {
            return redirect()->route('home.edit')->with('error', 'No files were uploaded.');
        }
    
        foreach ($request->file('images') as $image) {
    
            $path = $image->store('gallery', 'public');
    
            if ($path) {
        
                HomeGalleryImage::create([
                    'path_gallery' => $path,
                ]);
            } 
        }
    
        return redirect()->route('home.edit')->with('success', 'Images uploaded successfully!');
    }
    
    public function deleteGalleryImage($id)
    {
        $image = HomeGalleryImage::findOrFail($id);

        Storage::disk('public')->delete($image->path_gallery);
    
        $image->delete();
    
        return redirect()->route('home.edit')->with('success', 'Image deleted successfully!');
    }
}