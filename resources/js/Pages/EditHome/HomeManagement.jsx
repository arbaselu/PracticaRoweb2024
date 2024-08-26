import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ManageHomePage({ galleryImages, heroSection, aboutData, contactData }) {
    const [currentImages, setCurrentImages] = useState(galleryImages || []);

    useEffect(() => {
        setCurrentImages(galleryImages);
    }, [galleryImages]);

   
    const { data, setData, post, errors, processing } = useForm({
        hero_title: heroSection?.hero_title || '',
        hero_description: heroSection?.hero_description || '',
        media_path: null,
    });

    const { setData: setGalleryData, post: postGallery, processing: processingGallery, errors: galleryErrors } = useForm({
        images: [],
    });

    // Form handling for About Section
    const { data: aboutFormData, setData: setAboutData, post: postAbout, processing: processingAbout, errors: aboutErrors } = useForm({
        about_description: aboutData?.about_description || '',
        about_title: aboutData?.about_title || '',
    });

    // Form handling for Contact Section
    const { data: contactFormData, setData: setContactData, post: postContact, processing: processingContact, errors: contactErrors } = useForm({
        contact_email: contactData?.contact_email || '',
        contact_phone: contactData?.contact_phone || '',
        contact_address: contactData?.contact_address || '',
    });

    const handleHeroFileChange = (e) => {
        setData('media_path', e.target.files[0]);
    };

    const submitHero = (e) => {
        e.preventDefault();
        post(route('hero.update'), {
            forceFormData: true,
        });
    };

    const handleGalleryFileChange = (e) => {
        setGalleryData('images', e.target.files);
    };

    const submitGallery = (e) => {
        e.preventDefault();
        postGallery(route('gallery.upload'), {
            forceFormData: true,
            onSuccess: ({ props }) => {
                setCurrentImages(props.galleryImages);
            },
            onError: (errors) => {
                console.error(errors);
            }
        });
    };

    const handleDeleteGalleryImage = (imageId) => {
        Inertia.delete(route('gallery.delete', { id: imageId }), {
            onSuccess: () => {
                setCurrentImages(currentImages.filter(image => image.id !== imageId));
            },
            onError: (errors) => {
                console.error(errors);
            }
        });
    };

    const submitAbout = (e) => {
        e.preventDefault();
        postAbout(route('about.update'), {
            forceFormData: true,
        });
    };

    const submitContact = (e) => {
        e.preventDefault();
        postContact(route('contact.update'), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-3xl mx-auto py-8 px-6">
                {/* Hero Section Form */}
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Hero Section</h2>
                    <form onSubmit={submitHero} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="hero_title" value="Hero Title" className="text-gray-700 font-medium" />
                            <TextInput
                                id="hero_title"
                                name="hero_title"
                                className="mt-1 text-black block w-full"
                                value={data.hero_title}
                                onChange={(e) => setData('hero_title', e.target.value)}
                                required
                            />
                            <InputError message={errors.hero_title} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="hero_description" value="Hero Description" className="text-gray-700 font-medium" />
                            <TextInput
                                id="hero_description"
                                name="hero_description"
                                className="mt-1 text-black block w-full"
                                value={data.hero_description}
                                onChange={(e) => setData('hero_description', e.target.value)}
                                required
                            />
                            <InputError message={errors.hero_description} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="hero_media" value="Hero Media (Image/Video)" className="text-gray-700 font-medium" />
                            <input
                                id="hero_media"
                                type="file"
                                accept="image/*,video/*"
                                className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                onChange={handleHeroFileChange}
                            />
                            {errors.hero_media && <InputError className="mt-2" message={errors.hero_media} />}
                        </div>
                        <PrimaryButton
                            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                            disabled={processing}
                            type="submit"
                        >
                            Save Changes
                        </PrimaryButton>
                    </form>
                </div>

                {/* Gallery Section Form */}
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Gallery</h2>
                    <form onSubmit={submitGallery} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="images" value="Upload Images" className="text-gray-700 font-medium" />
                            <div className="mt-1 flex items-center">
                                <input
                                    id="images"
                                    type="file"
                                    multiple
                                    className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    onChange={handleGalleryFileChange}
                                />
                            </div>
                            {galleryErrors && galleryErrors.images && <InputError className="mt-2" message={galleryErrors.images} />}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {currentImages.map((image) => (
                                <div key={image.id} className="relative">
                                    <img
                                        src={`/storage/${image.path_gallery}`}
                                        alt={`Gallery Image ${image.id}`}
                                        className="w-32 h-32 object-cover rounded-md shadow-md"
                                    />
                                    <button
                                        onClick={() => handleDeleteGalleryImage(image.id)}
                                        className="absolute bottom-1 right-1 text-red-600 rounded-full p-1"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <PrimaryButton
                            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                            disabled={processingGallery}
                            type="submit"
                        >
                            Save Changes
                        </PrimaryButton>
                    </form>
                </div>

                {/* About Section Form */}
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit About Section</h2>
                    <form onSubmit={submitAbout} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="about_title" value="About Title" className="text-gray-700 font-medium" />
                            <TextInput
                                id="about_title"
                                name="about_title"
                                className="mt-1 text-black block w-full"
                                value={aboutFormData.about_title}
                                onChange={(e) => setAboutData('about_title', e.target.value)}
                                required
                            />
                            <InputError message={aboutErrors.about_title} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="about_description" value="About Description" className="text-gray-700 font-medium" />
                            <TextInput
                                id="about_description"
                                name="about_description"
                                className="mt-1 text-black block w-full"
                                value={aboutFormData.about_description}
                                onChange={(e) => setAboutData('about_description', e.target.value)}
                                required
                            />
                            <InputError message={aboutErrors.about_description} className="mt-2" />
                        </div>
                        <PrimaryButton
                            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                            disabled={processingAbout}
                            type="submit"
                        >
                            Save Changes
                        </PrimaryButton>
                    </form>
                </div>

                {/* Contact Section Form */}
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Contact Section</h2>
                    <form onSubmit={submitContact} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="contact_email" value="Contact Email" className="text-gray-700 font-medium" />
                            <TextInput
                                id="contact_email"
                                name="contact_email"
                                type="email"
                                className="mt-1 text-black block w-full"
                                value={contactFormData.contact_email}
                                onChange={(e) => setContactData('contact_email', e.target.value)}
                                required
                            />
                            <InputError message={contactErrors.contact_email} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="contact_phone" value="Contact Phone" className="text-gray-700 font-medium" />
                            <TextInput
                                id="contact_phone"
                                name="contact_phone"
                                type="tel"
                                className="mt-1 text-black block w-full"
                                value={contactFormData.contact_phone}
                                onChange={(e) => setContactData('contact_phone', e.target.value)}
                                required
                            />
                            <InputError message={contactErrors.contact_phone} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="contact_address" value="Contact Address" className="text-gray-700 font-medium" />
                            <TextInput
                                id="contact_address"
                                name="contact_address"
                                className="mt-1 text-black block w-full"
                                value={contactFormData.contact_address}
                                onChange={(e) => setContactData('contact_address', e.target.value)}
                                required
                            />
                            <InputError message={contactErrors.contact_address} className="mt-2" />
                        </div>
                        <PrimaryButton
                            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 rounded-md"
                            disabled={processingContact}
                            type="submit"
                        >
                            Save Changes
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
