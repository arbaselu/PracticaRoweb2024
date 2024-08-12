
export default function Footer() {
    return (
        <footer className="w-full py-16 border-t-2 bg-black text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <span className="text-xl font-semibold">SummerSplash</span>
                <p className="text-sm">&copy; 2024 SummerSplash. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
                <a href="#" className="text-sm hover:text-gray-400">FAQ</a>
            </div>
            <div className="flex space-x-10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 0C8.74 0 8.332.014 7.052.072c-1.255.058-2.112.262-2.852.558a5.73 5.73 0 00-2.074 1.347A5.73 5.73 0 00.779 4.927c-.296.74-.5 1.597-.558 2.852C.014 8.333 0 8.74 0 12s.014 3.667.072 4.948c.058 1.255.262 2.112.558 2.852a5.73 5.73 0 001.347 2.074 5.73 5.73 0 002.074 1.347c.74.296 1.597.5 2.852.558 1.28.058 1.687.072 4.948.072s3.667-.014 4.948-.072c1.255-.058 2.112-.262 2.852-.558a5.73 5.73 0 002.074-1.347 5.73 5.73 0 001.347-2.074c.296-.74.5-1.597.558-2.852.058-1.28.072-1.687.072-4.948s-.014-3.667-.072-4.948c-.058-1.255-.262-2.112-.558-2.852a5.73 5.73 0 00-1.347-2.074 5.73 5.73 0 00-2.074-1.347c-.74-.296-1.597-.5-2.852-.558C15.667.014 15.26 0 12 0zm0 2.197c2.76 0 3.092.011 4.186.06 1.07.048 1.653.219 2.042.365a3.493 3.493 0 011.288.84 3.493 3.493 0 01.84 1.288c.146.389.317.972.365 2.042.049 1.094.06 1.426.06 4.186s-.011 3.092-.06 4.186c-.048 1.07-.219 1.653-.365 2.042a3.493 3.493 0 01-.84 1.288 3.493 3.493 0 01-1.288.84c-.389.146-.972.317-2.042.365-1.094.049-1.426.06-4.186.06s-3.092-.011-4.186-.06c-1.07-.048-1.653-.219-2.042-.365a3.493 3.493 0 01-1.288-.84 3.493 3.493 0 01-.84-1.288c-.146-.389-.317-.972-.365-2.042-.049-1.094-.06-1.426-.06-4.186s.011-3.092.06-4.186c.048-1.07.219-1.653.365-2.042a3.493 3.493 0 01.84-1.288 3.493 3.493 0 011.288-.84c.389-.146.972-.317 2.042-.365 1.094-.049 1.426-.06 4.186-.06zm0 3.156a5.645 5.645 0 100 11.29 5.645 5.645 0 000-11.29zm0 9.292a3.647 3.647 0 110-7.294 3.647 3.647 0 010 7.294zm6.406-9.663a1.317 1.317 0 11-2.635 0 1.317 1.317 0 012.635 0z"/>
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708H9.691v-3.62h3.129V8.412c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.503 0-1.794.714-1.794 1.763v2.311h3.587l-.467 3.62h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zm-1.76-13.18c-1.13 0-2.04-.92-2.04-2.04s.92-2.04 2.04-2.04c1.13 0 2.04.92 2.04 2.04 0 1.12-.92 2.04-2.04 2.04zm13.54 13.18h-3.53v-5.604c0-1.34-.027-3.067-1.87-3.067-1.87 0-2.16 1.458-2.16 2.965v5.707h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.848 3.34-1.848 3.57 0 4.23 2.35 4.23 5.4v6.34z"/>
                    </svg>
                </a>
            </div>
        </div>
        </footer>
    );
}
