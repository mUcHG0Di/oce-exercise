<?php

namespace App\Http\Controllers;

use App\Http\Requests\ScreenOneRequest;
use App\Services\ScreenOne\SearchServiceInterface;

class ScreenOneController extends Controller
{
    private $searchService;

    public function __construct(SearchServiceInterface $searchService)
    {
        $this->searchService = $searchService;
    }

    public function index(ScreenOneRequest $request)
    {
        $query = $request->validated('query');

        $books = $this->searchService->search($query);

        return inertia('ScreenOne/Index', [
            'books' => $books,
            'query' => $query
        ]);
    }
}
