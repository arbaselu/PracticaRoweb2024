import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, children }) {
    const [showingSidebar, setShowingSidebar] = useState(true);

    return (
        <div className="min-h-screen bg-cyan-50 text-white flex">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform ${
                    showingSidebar ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 ease-in-out`}
            >
                <div className="flex flex-col min-h-screen">
                    <div className="flex items-center justify-between h-16 px-4 bg-cyan-300">
                        <Link href="/">
                            <span className="text-2xl font-semibold text-gray-900">
                                SummerSplash
                            </span>
                        </Link>
                        {/* Button to close sidebar */}
                        <button
                            onClick={() => setShowingSidebar(false)}
                            className="text-gray-900"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-4 py-4">
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href={route('dashboard')}
                                    className={`block py-2 px-4 rounded text-center ${
                                        route().current('dashboard')
                                            ? 'bg-cyan-500 font-bold'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={route('home.edit')}
                                    className={`block py-2 px-4 rounded text-center ${
                                        route().current('home.edit')
                                            ? 'bg-cyan-500 font-bold'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                 Home Management
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={route('categories.list')}
                                    className={`block py-2 px-4 rounded text-center ${
                                        route().current('categories.list')
                                            ? 'bg-cyan-500 font-bold'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('products.list')}
                                    className={`block py-2 px-4 rounded text-center ${
                                        route().current('products.list')
                                            ? 'bg-cyan-500 font-bold'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('profile.edit')}
                                    className={`block py-2 px-4 rounded text-center ${
                                        route().current('profile.edit')
                                            ? 'bg-cyan-500 font-bold'
                                            : 'hover:bg-gray-700'
                                    }`}
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Log Out Button */}
                    <div className="mt-auto px-4 py-6">
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="block w-full text-center py-2 px-4 rounded text-red-400 hover:bg-gray-700 hover:text-red-500"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div
                className={`flex-1 transition-all duration-200 ease-in-out ${
                    showingSidebar ? 'ml-64' : 'ml-0'
                }`}
            >
                {/* Button to open sidebar */}
                <button
                    onClick={() => setShowingSidebar(!showingSidebar)}
                    className={`fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out ${
                        showingSidebar ? 'hidden' : 'block'
                    }`}
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
}
