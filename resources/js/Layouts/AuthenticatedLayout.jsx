import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingSidebar, setShowingSidebar] = useState(true);

    return (
        <div className="min-h-screen bg-cyan-50 flex">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                    showingSidebar ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 ease-in-out z-30`}
            >
                <div className="flex flex-col min-h-screen">
                    <div className="flex items-center justify-between h-16 px-4 bg-cyan-300">
                        <Link href="/">
                            <span className="text-2xl font-semibold text-white">
                                SummerSplash
                            </span>
                        </Link>
                        {/* Button to close sidebar */}
                        <button
                            onClick={() => setShowingSidebar(false)}
                            className="text-white"
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

                    {/* User Info */}
                    <div className="flex flex-col items-center justify-center mt-4 px-4">
                        <span className="text-lg font-semibold text-gray-700">
                            {user.name}
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-4 py-4">
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href={route('dashboard')}
                                    className={`block text-black text-center ${
                                        route().current('dashboard')
                                            ? 'bg-cyan-300 font-bold'
                                            : ''
                                    }`}
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('profile.edit')}
                                    className={`block text-center text-black ${
                                        route().current('profile.edit')
                                            ? 'bg-cyan-300 font-bold'
                                            : ''
                                    }`}
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="block w-full text-black hover:text-red-500"
                                >
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </nav>
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
                    className={`fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200 ease-in-out ${
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

