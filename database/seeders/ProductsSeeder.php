<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductImage;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     
        $products = [
            [
                'name' => 'Floating Pool Chair',
                'description' => 'Comfortable floating chair for relaxing in the pool.',
                'price' => 50,
                'category_id' => 2, // Presupunem că 2 este ID-ul categoriei pentru accesorii
            ],
            [
                'name' => 'Inflatable Pool Noodle',
                'description' => 'Flexible inflatable noodle, perfect for pool fun.',
                'price' => 10,
                'category_id' => 2,
            ],
            [
                'name' => 'Poolside Umbrella',
                'description' => 'Large umbrella to provide shade by the pool.',
                'price' => 70,
                'category_id' => 2,
            ],
            [
                'name' => 'Waterproof Bluetooth Speaker',
                'description' => 'Enjoy your favorite music with this waterproof Bluetooth speaker.',
                'price' => 40,
                'category_id' => 2,
            ],
            [
                'name' => 'Swim Goggles',
                'description' => 'Clear view swim goggles for underwater exploration.',
                'price' => 15,
                'category_id' => 2,
            ],
            [
                'name' => 'Pool Cleaning Kit',
                'description' => 'Complete kit to keep your pool clean and clear.',
                'price' => 30,
                'category_id' => 2,
            ],
            [
                'name' => 'Inflatable Water Slide',
                'description' => 'Fun inflatable slide to add excitement to your pool.',
                'price' => 150,
                'category_id' => 2,
            ],
            [
                'name' => 'Poolside Drink Holder',
                'description' => 'Keep your drinks close and cool with this drink holder.',
                'price' => 20,
                'category_id' => 2,
            ],
            [
                'name' => 'Beach Ball',
                'description' => 'Colorful beach ball for pool games and fun.',
                'price' => 5,
                'category_id' => 2,
            ],
            [
                'name' => 'Swimming Cap',
                'description' => 'Comfortable and durable swimming cap for all ages.',
                'price' => 8,
                'category_id' => 2,
            ],
        ];

        foreach ($products as $productData) {
            $product = Product::create([
                'name' => $productData['name'],
                'description' => $productData['description'],
                'price' => $productData['price'],
                'category_id' => $productData['category_id'],
            ]);

           
        }
    }
}
