import React from 'react';

export default function ProductFilter({ searchTerm, handleSearchChange, categoryFilterId, handleCategoryChange, sortOrder, handleSortChange, categories }) {
    return (
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-1/3 p-3 border border-gray-300 rounded-lg"
            />
            <select
                value={categoryFilterId}
                onChange={handleCategoryChange}
                className="w-1/4 py-3 border border-gray-300 rounded-lg"
            >
                <option value={''}>Toate produsele</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <select
                value={sortOrder}
                onChange={handleSortChange}
                className="w-1/4 py-3 border border-gray-300 rounded-lg"
            >
                <option value="">Căutare avansată</option>
                <option value="asc">Preț Crescător</option>
                <option value="desc">Preț Descrescător</option>
            </select>
        </div>
    );
}
