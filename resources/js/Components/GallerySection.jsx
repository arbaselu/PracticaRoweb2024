import React from 'react';
import ImageGallery from 'react-image-gallery';

export default function GallerySection({ images }) {
    return (
        <section id="gallery" className="pb-24 bg-cyan-100 ">
            <div className="container mx-auto px-4 mt-6" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
                <div className="max-w-4xl mx-auto">
                    <ImageGallery
                        items={images}
                        showThumbnails={true}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay={true}
                        onImageClick={(e) => e.preventDefault()}
                        onImageLoad={() => window.dispatchEvent(new Event('resize'))}
                        additionalClass="fixed-size-gallery"
                    />
                </div>
            </div>
        </section>
    );
}
