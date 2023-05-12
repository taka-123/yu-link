<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Blog', ['posts' => $posts]);
    }

    public function show(Post $post)
    {
        return Inertia::render('BlogDetail', ['post' => $post]);
    }
}
