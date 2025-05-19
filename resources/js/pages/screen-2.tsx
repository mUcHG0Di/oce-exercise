import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Screen 2',
        href: '/screen-2',
    },
];

export default function Screen1() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Screen 2" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>This is screen 2</h1>
            </div>
        </AppLayout>
    );
}
