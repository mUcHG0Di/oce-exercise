import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { Book, type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import useDebounce from '@/hooks/use-debounce';
import { useEffect, useRef, useState } from 'react';
import { BooksTable } from '@/components/books/books-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Screen 1',
        href: '/screen-1',
    },
];

interface Screen1Props {
    books: Book[];
    query: string;
}

export default function Screen1({ books, query }: Screen1Props) {

    const [search, setSearch] = useState(query);
    const debouncedSearch = useDebounce(search, 300);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        if (debouncedSearch) {
            performSearch(debouncedSearch);
        }
    }, [debouncedSearch]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        performSearch(search);
    };

    const performSearch = (query: string) => {
        router.get(route('screen-1/books', { query }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Screen 1" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className='flex flex-col gap-4'>
                    <form onSubmit={handleSearchSubmit}>
                        <Input placeholder="Search" value={search} onChange={handleSearchChange} />
                    </form>
                </div>

                <BooksTable books={books} />
            </div>
        </AppLayout>
    );
}
