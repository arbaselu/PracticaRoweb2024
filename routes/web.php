<?php
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // Preia toate produsele cu imaginile lor asociate
    $products = Product::with('images')->get();

    return Inertia::render('Welcome', [
        'products' => $products,
        'canLogin' => Route::has('login'),
    ]);
})->name('welcome');

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
        Route::get('/edit/{product}', [ProductController::class, 'update'])->name('update');

        Route::post('/store/{product?}', [ProductController::class, 'store'])->name('store');
        Route::delete('/{product}', [ProductController::class, 'delete'])->name('delete');
    });

});

require __DIR__.'/auth.php';
