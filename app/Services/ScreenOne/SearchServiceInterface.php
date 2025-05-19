<?php

namespace App\Services\ScreenOne;

interface SearchServiceInterface
{
    public function search(string $query): array;
}
