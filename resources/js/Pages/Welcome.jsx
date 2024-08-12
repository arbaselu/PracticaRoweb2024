
import { Head } from '@inertiajs/react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Welcome() {
    return (
        <>
        <Head title="Welcome" />
            <div className="flex flex-col bg-cyan-50 min-h-screen">
        <Navbar/>
            <main className="flex justify-center items-center text-black min-h-screen">
                Content
            </main>
        <Footer/>
            </div>
        </>
    );
};

