import React from 'react';

export default function ContactForm({ data, setData, submit, contactData }) {
    return (
        <section id="contact" className="py-16 bg-cyan-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-700 mb-4">We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                        <p className="text-gray-700 mb-2"><strong>Email:</strong> {contactData.contact_email}</p>
                        <p className="text-gray-700 mb-2"><strong>Phone:</strong> {contactData.contact_phone}</p>
                        <p className="text-gray-700"><strong>Address:</strong> {contactData.contact_address}</p>
                    </div>
                    <div className="md:w-1/2">
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
