<?php

namespace App\Services\ScreenOne;

use App\Models\Book;

class SearchService implements SearchServiceInterface
{
    public function search(string $query): array
    {
        $books = Book::whereFullText(['title', 'status', 'notes'], $query)->get();

        return $books->toArray();
    }
}
