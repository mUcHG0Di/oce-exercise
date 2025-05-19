import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Screen 3',
        href: '/screen-3',
    },
];

export default function Screen1() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Screen 3" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>This is screen 3</h1>
            </div>
        </AppLayout>
    );
}
