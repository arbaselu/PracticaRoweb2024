import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List({ categories }) {
    const { delete: deleteCategory } = useForm({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const handleDelete = (id) => {
        setCategoryToDelete(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deleteCategory(route('categories.delete', categoryToDelete));
        setIsModalOpen(false);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Category list" />
            <div className="w-full">
                <div className="py-4 px-4">
                    <div className="flex justify-between items-center mt-10 mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
                        <Link href={route('categories.create')} className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add new category
                        </Link>
                    </div>

                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Order</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 text-gray-700">{category.id}</td>
                                        <td className="py-2 px-4 text-gray-700">{category.name}</td>
                                        <td className="py-2 px-4 text-gray-700">{category.order}</td>
                                        <td className="py-2 px-4 text-gray-700 flex items-center">
                                            <Link href={route('categories.update', [category.id])} className="text-blue-600 hover:text-blue-800">
                                                <FontAwesomeIcon icon={faPencil} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="ml-4 text-red-600 hover:text-red-800"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-md">
                                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                                <p className="mb-4">Are you sure you want to delete this category? This action cannot be undone.</p>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                        onClick={confirmDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
