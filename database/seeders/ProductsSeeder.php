<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Produs categoria Test',
            'category_id' => 3,
            'price' => 100,
            'description' => 'descriere produs',
        ]);
    }
}
