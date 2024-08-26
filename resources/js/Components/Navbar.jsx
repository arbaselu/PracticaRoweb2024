import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header>
            <div className="flex lg:justify-center lg:col-start-2">
                <nav className="bg-gray-800 w-full border-b-2 border-gray-800 relative">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-300">
                                SummerSplash
                            </span>
                        </a>
                        <button
                            onClick={handleToggle}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700"
                            aria-controls="navbar-default"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                        <div
                            id="navbar-default"
                            className={` top-full left-0 right-0 bg-gray-800 ${isMenuOpen ? 'block absolute' : 'hidden'} md:block transition duration-300 ease-in-out z-50`}
                        >
                            <ul className="font-extrabold flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse bg-gray-800 border-2 border-t-0 md:border-0">
                                <li>
                                    <Link
                                        href="#home"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="#category"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                    >
                                        Category
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                        >
                                            My Account
                                        </Link>
                                    ) : (
                                        <Link
                                            href={route('login')}
                                            className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0"
                                        >
                                            Log in
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
