 import React from 'react';

    export default function AboutSection({ aboutData }) {

    const aboutHardcode = {
        features: [
            {
                title: "Curățător Automat pentru Piscină",
                description: "Acest robot inteligent ne ajută să menținem piscina curată și sigură pentru utilizatori, eliminând murdăria și impuritățile.",
                image: "/storage/about/robot.avif"
            },
            {
                title: "Sistem de Filtrare a Apei",
                description: "Sistemul nostru de filtrare avansat asigură o apă pură, eliminând bacteriile și impuritățile pentru a menține un mediu sigur pentru toți înotătorii.",
                image: "/storage/about/water.jpg"
            },
            {
                title: "Acoperire pentru Piscină",
                description: "O acoperire eficientă care menține apa curată și reduce evaporarea, protejând piscina de murdărie și frunze.",
                image: "/storage/about/protection.jpg"
            }
        ]
    };
    
    return (
        <section id="about" className="flex flex-col items-center py-10 ">
            <div className="container mx-auto" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center mb-8">{aboutData.about_title}</h2>
                <p className="text-lg text-center text-gray-700 mb-8">
                    {aboutData.about_description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {aboutHardcode.features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 min-h-[450px] flex flex-col justify-between">
                            <div>
                                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

