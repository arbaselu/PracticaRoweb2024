
export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-cyan-50">
            <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
