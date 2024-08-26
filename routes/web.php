<?php
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home.index');

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'edit'])->name('home.edit');
    Route::post('/EditHome/uploadGallery', [HomeController::class, 'uploadGallery'])->name('gallery.upload');
    Route::post('/EditHome/updateHero', [HomeController::class, 'updateHero'])->name('hero.update');
    Route::post('/EditHome/updateAbout', [HomeController::class, 'updateAbout'])->name('about.update');
    Route::post('/EditHome/updateContact', [HomeController::class, 'updateContact'])->name('contact.update');
    Route::delete('/EditHome/deleteGalleryImage/{id}', [HomeController::class, 'deleteGalleryImage'])->name('gallery.delete');
    Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');

});

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::group([
        'prefix' => 'categories',
        'as' => 'categories.'
    ], function () {
        Route::get('/', [CategoryController::class, 'list'])->name('list');
        Route::get('/create', [CategoryController::class, 'create'])->name('create');
        Route::get('/edit/{category}', [CategoryController::class, 'update'])->name('update');
        Route::post('/store/{category?}', [CategoryController::class, 'store'])->name('store');
        Route::delete('/{category}', [CategoryController::class, 'delete'])->name('delete');
    });

    Route::group([
        'prefix' => 'products',
        'as' => 'products.'
    ], function () {
        Route::get('/', [ProductController::class, 'list'])->name('list');
        Route::get('/create', [ProductController::class, 'create'])->name('create');
        Route::get('/edit/{product}', [ProductController::class, 'edit'])->name('edit'); 
        Route::post('/store', [ProductController::class, 'store'])->name('store'); 
        Route::post('/update/{product}', [ProductController::class, 'update'])->name('update');
        Route::delete('/{product}', [ProductController::class, 'delete'])->name('delete');
    });
    

});

require __DIR__.'/auth.php';
