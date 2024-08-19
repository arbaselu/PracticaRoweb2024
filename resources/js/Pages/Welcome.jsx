import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Welcome({ products, auth }) { 
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col bg-cyan-50 min-h-screen">
                <Navbar auth={auth} /> 
                <main className="flex flex-col items-center text-black min-h-screen py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <p className="text-gray-700">{product.description}</p>
                                <p className="text-gray-900 font-semibold">Price: ${product.price}</p>
                                <div className="mt-4">
                                    {product.images.map((image) => (
                                        <img
                                            key={image.id}
                                            src={`/storage/${image.path}`}
                                            alt={product.name}
                                            className="w-full h-48 object-cover mb-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
