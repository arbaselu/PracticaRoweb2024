import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List({ products, categories }) {
    const { delete: deleteProduct } = useForm({});
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    // State-uri pentru paginare și filtre
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilterId, setCategoryFilterId] = useState('');

    const handleDelete = (id) => {
        setDeleteId(id);
        setModalVisible(true);
    };

    const confirmDelete = () => {
        deleteProduct(route('products.delete', deleteId));
        setModalVisible(false);
    };

    // Funcțiile de filtrare și sortare
    const searchByName = (products, searchTerm) => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filterByCategory = (products, categoryFilterId) => {
        if (categoryFilterId === '') {
            return products;
        }
        return products.filter(product => product.category_id == categoryFilterId);
    };

    const filteredByName = searchByName(products, searchTerm);
    const filteredByCategory = filterByCategory(filteredByName, categoryFilterId);
    const finalFilteredProducts = filteredByCategory;

    // Paginare
    const totalPages = Math.ceil(finalFilteredProducts.length / itemsPerPage);
    const currentProducts = finalFilteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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

                    {/* Filtre */}
                    <div className="flex space-x-4 mb-4 text-gray-800">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg w-1/3"
                        />
                        <select
                            value={categoryFilterId}
                            onChange={(e) => setCategoryFilterId(e.target.value)}
                            className="p-2 border border-gray-300 text-gray-700 rounded-lg w-1/3"
                        >
                            <option value="">Toate categoriile</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
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
                                {currentProducts.map((product, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 text-gray-700">{product.name}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.description}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.price}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.id}</td>
                                        <td className="py-2 px-4 text-gray-700">{product.category_id}</td>
                                        <td className="py-2 px-4 text-gray-700 flex items-center">
                                           
                                            <Link href={route('products.edit', [product.id])} className="text-blue-600 hover:text-blue-800">
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

                    {/* Paginare */}
                    <div className="flex justify-center items-center space-x-4 py-4">
                        <button
                            className={`rounded-full p-3 ${currentPage === 1 ? 'bg-gray-300' : 'bg-cyan-400'} text-white hover:bg-cyan-500 transition duration-300`}
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            &#60;
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`rounded-full p-3 ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-cyan-400'} text-white hover:bg-cyan-500 transition duration-300`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`rounded-full p-3 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-cyan-400'} text-white hover:bg-cyan-500 transition duration-300`}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        >
                            &#62;
                        </button>
                    </div>

                    {modalVisible && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl text-black font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4 text-black">Are you sure you want to delete this product? This action cannot be undone.</p>
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
