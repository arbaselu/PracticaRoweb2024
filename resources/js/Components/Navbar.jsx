import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar(auth){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
return(

    <header>
        <div className="flex lg:justify-center lg:col-start-2">
            <nav className="bg-white w-full border-b-2 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-300">
                            SummerSplash
                        </span>
                    </a>
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-700 focus:ring-gray-600"
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
                        className={`absolute top-full left-0 right-0 md:static md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
                        style={{ zIndex: 1000 }} 
                    >
                        <ul className="font-extrabold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse bg-white border-2 border-t-0 md:border-0">
                            <li>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={handleDropdownToggle}
                                    className="flex items-center pl-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                >
                                    Category
                                    <svg
                                        className="ms-2 mt-1 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute w-40 py-2 text-center z-50 bg-white shadow-md mt-4 ">
                                        <li>
                                            <a href="#" className="block py-2 text-gray-900 hover:bg-cyan-300 ">
                                                Category 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2  text-gray-900 hover:bg-cyan-300">
                                                Category 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 text-gray-900 hover:bg-cyan-300">
                                                Category 3
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
                                    >
                                        My Account
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-cyan-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-cyan-300 dark:hover:text-white"
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