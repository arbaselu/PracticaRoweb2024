import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import ProductFilter from '../Components/ProductFilter';
import ProductGrid from '../Components/ProductGrid';
import GallerySection from '../Components/GallerySection';
import AboutSection from '../Components/AboutSection';
import ContactForm from '../Components/ContactForm';
import 'react-image-gallery/styles/css/image-gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Welcome({ products = [], categories = [], auth, galleryImages = [], heroSection = {},aboutData={} ,contactData = {} }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const { data, setData, post, errors, processing, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.send'), {
            onSuccess: () => reset()
        });
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilterId, setCategoryFilterId] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryFilterId(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

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

    const sortProducts = (products, sortOrder) => {
        if (sortOrder === 'asc') {
            return products.sort((a, b) => a.price - b.price);
        }
        if (sortOrder === 'desc') {
            return products.sort((a, b) => b.price - a.price);
        }
        return products;
    };

    const filteredByName = searchByName(products, searchTerm);
    const filteredByCategory = filterByCategory(filteredByName, categoryFilterId);
    const finalFilteredProducts = sortProducts(filteredByCategory, sortOrder);

    const totalPages = Math.ceil(finalFilteredProducts.length / itemsPerPage);
    const currentProducts = finalFilteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const images = galleryImages.map(image => ({
        original: `/storage/${image.path_gallery}`,
        thumbnail: `/storage/${image.path_gallery}`,
    }));

    const categoryName = categoryFilterId ? categories.find(category => category.id == categoryFilterId)?.name : 'Toate produsele';

    return (
        <>
            <Head title="Welcome" />
            <div id="home" className="flex flex-col min-h-screen">
                <Navbar auth={auth} />
                
                <HeroSection
                    mediaSrc={`/storage/${heroSection.media_path}`}
                    title={heroSection.hero_title}
                    description={heroSection.hero_description}
                />

                <ProductFilter
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                    categoryFilterId={categoryFilterId}
                    handleCategoryChange={handleCategoryChange}
                    sortOrder={sortOrder}
                    handleSortChange={handleSortChange}
                    categories={categories}
                />

                <ProductGrid
                    products={currentProducts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    categoryName={categoryName}
                />

                <GallerySection images={images} />
                <AboutSection aboutData={aboutData} />
                <ContactForm data={data} setData={setData} submit={submit} contactData={contactData} />

                <Footer />
            </div>
        </>
    );
}
