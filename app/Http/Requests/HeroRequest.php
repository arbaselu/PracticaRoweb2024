<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HeroRequest extends FormRequest
{

    public function rules()
    {
        return [
            'media_path' => 'nullable|file|mimes:jpeg,png,jpg,mp4|max:120000',
            'hero_title' => 'required|string|max:255',
            'hero_description' => 'required|string|max:1000',
        ];
    }

    public function messages()
    {
        return [
            'media.mimes' => 'Fișierul trebuie să fie o imagine (jpeg, png, jpg) sau un video (mp4).',
            'media.max' => 'Fișierul media nu poate depăși 10MB.',
            'title.required' => 'Titlul este obligatoriu.',
            'description.required' => 'Descrierea este obligatorie.',
            'title.max' => 'Titlul nu poate avea mai mult de 255 de caractere.',
            'description.max' => 'Descrierea nu poate avea mai mult de 1000 de caractere.',
        ];
    }
}
