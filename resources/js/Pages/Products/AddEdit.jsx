import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useState } from 'react';

export default function AddEdit({ product, categories }) {
    const { data, setData, post, errors, processing } = useForm({
        name: product?.name || '',
        price: product?.price || '',
        description: product?.description || '',
        category_id: product?.category_id || '',
        image: null,
    });

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
        setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();

        if (product) {
            post(route('products.update', { product: product.id }), {
                data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } else {
  
            post(route('products.store'), {
                data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={product ? 'Edit product' : 'Add product'} />
            <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {product ? 'Edit Product' : 'Add Product'}
                </h2>
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="price" value="Price" />
                        <TextInput
                            id="price"
                            type="number"
                            className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.price} />
                    </div>

                    <div>
                        <InputLabel htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.description} />
                    </div>

                    <div>
                        <InputLabel htmlFor="category_id" value="Category" />
                        <select
                            id="category_id"
                            className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                            required
                        >
                            <option value="">Selectează o categorie</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <InputError className="mt-2" message={errors.category_id} />
                    </div>

                    <div>
                        <InputLabel htmlFor="image" value="Product Image" />
                        <input
                            id="image"
                            type="file"
                            className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            onChange={handleImageChange}
                        />
                        {preview && <img src={preview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md shadow-md" />}
                        <InputError className="mt-2" message={errors.image} />
                    </div>

                    <div className="flex items-center gap-4">
                        <PrimaryButton
                            disabled={processing}
                            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                        >
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
