import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List({ products }) {
    const { delete: deleteProduct } = useForm({});
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleDelete = (id) => {
        setDeleteId(id);
        setModalVisible(true);
    };

    const confirmDelete = () => {
        deleteProduct(route('products.delete', deleteId));
        setModalVisible(false);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Product list" />
            <div className="w-full">
                <div className="py-4 px-4">
                    <div className="flex justify-between items-center mt-10 mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                        <Link href={route('products.create')} className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add new product
                        </Link>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Price</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID Product</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID Category</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 text-gray-700">{product.name}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.description}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.price}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.id}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.category_id}</td>
                                        <td className="py-2 px-4 text-gray-700 flex items-center">
                                            <Link href={route('products.update', [product.id])} className="text-blue-600 hover:text-blue-800">
                                                <FontAwesomeIcon icon={faPencil} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id)}
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

                    {modalVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-md">
                                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                                <p className="mb-4">Are you sure you want to delete this product? This action cannot be undone.</p>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                        onClick={() => setModalVisible(false)}
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
