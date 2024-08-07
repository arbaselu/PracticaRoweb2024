<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User::factory(10)->create();

      
            if(!User::where('email','admin@practica.local')->exists()){
                $user = new User();
                $user->email ='admin@practica.local';
                $user->name ='Admin';
                $user->password = Hash::make('parola');
                $user->save();
            }
    }
}
