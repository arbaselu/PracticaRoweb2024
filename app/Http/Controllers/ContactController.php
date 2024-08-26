<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Mail::raw($request->message, function ($message) use ($request) {
            $message->from($request->email, $request->name)
                    ->to('hello@example.com') 
                    ->subject('New Contact Message');
        });

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
