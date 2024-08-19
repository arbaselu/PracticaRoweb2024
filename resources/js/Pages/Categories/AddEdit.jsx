import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { Transition } from "@headlessui/react";

export default function AddEdit({ category }) {
    const { data, setData, post, errors, processing } = useForm({
        name: category?.name || '',
        order: category?.order || '',
    });

    const submit = (e) => {
        e.preventDefault();

        let categoryRoute = category ? route('categories.store', [category.id]) : route('categories.store');
        post(categoryRoute);
    };

    return (
        <AuthenticatedLayout>
            <Head title={category ? 'Edit category' : 'Add category'} />
            <div className="max-w-3xl mx-auto py-8 px-6">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category ? 'Edit category' : 'Add category'}</h2>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" className="text-gray-700 font-medium" />
                            <TextInput
                                id="name"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                            />
                            <InputError className="mt-2 text-red-600" message={errors.name} />
                        </div>

                        <div>
                            <InputLabel htmlFor="order" value="Order" className="text-gray-700 font-medium" />
                            <TextInput
                                id="order"
                                type="number"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                value={data.order}
                                onChange={(e) => setData('order', e.target.value)}
                                required
                            />
                            <InputError className="mt-2 text-red-600" message={errors.order} />
                        </div>

                        <div className="flex justify-end">
                            <PrimaryButton
                                disabled={processing}
                                className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                            >
                                Save
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
