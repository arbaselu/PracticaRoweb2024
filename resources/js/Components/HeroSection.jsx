import React from 'react';

export default function HeroSection({ mediaSrc, title, description }) {
   
    const isVideo = (src) => {
        const videoExtensions = ['mp4', 'webm', 'ogg'];
        const extension = src.split('.').pop().toLowerCase();
        return videoExtensions.includes(extension);
    };

    return (
        <div className="relative h-screen">
            {isVideo(mediaSrc) ? (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={mediaSrc}
                    autoPlay
                    muted
                    loop
                />
            ) : (
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={mediaSrc}
                    alt="Hero"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-white text-center" data-aos="fade-up">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="text-2xl mt-4">{description}</p>
                    <button className="mt-8 px-6 py-3 border border-white text-xl text-white bg-transparent rounded-lg hover:bg-white hover:text-cyan-400 transition duration-300">
                        <a href="#gallery">View More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
