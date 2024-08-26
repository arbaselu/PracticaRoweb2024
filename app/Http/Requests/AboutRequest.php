<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AboutRequest extends FormRequest
{

    
    public function rules(): array
    {
        return [
            'about_description' => 'required|string|max:1000',
            'about_title' => 'required|string|max:50',

        ];
    }

    public function messages(): array
    {
        return [
            'about_description.required' => 'Descrierea este obligatorie.',
            'about_description.max' => 'Descrierea nu poate avea mai mult de 1000 de caractere.',
            'about_title.required' => 'Descrierea este obligatorie.',
            'about_title.max' => 'Descrierea nu poate avea mai mult de 50 de caractere.',
        ];
    }
}
