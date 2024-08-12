import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="flex justify-center items-center bg-cyan-50 w-full min-h-screen text-black">
                Items
            </div>
        </AuthenticatedLayout>
    );
}
