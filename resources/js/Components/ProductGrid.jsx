import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProductGrid({ products, currentPage, setCurrentPage, totalPages, categoryName }) {
    return (
        <section id="category" className="flex flex-col bg-white border-t-2 border-neutral-300 items-center py-10">
            <div className="container mx-auto" data-aos="fade-up">
                <h2 className="text-5xl text-cyan-300 font-bold mb-8 text-center">
                    {categoryName}
                </h2>

                <div className="grid grid-cols-1 m-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 min-h-[450px] flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <h4 className="font-bold">Price: {product.price}$</h4>
                                <p className="text-gray-700">{product.description}</p>
                            </div>
                            <div className="mt-4">
                                {product.images.map((image) => (
                                    <img
                                        key={image.id}
                                        src={`/storage/${image.path}`}
                                        alt={product.name}
                                        className="w-full h-72 object-cover mb-2"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center space-x-4 py-4">
                    <button
                        className={`rounded-full p-3 ${currentPage === 1 ? 'bg-gray-300' : 'bg-cyan-400'} text-white hover:bg-cyan-500 transition duration-300`}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
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
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}
