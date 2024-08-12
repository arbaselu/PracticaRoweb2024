export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center px-4 py-2 bg-cyan-300 text-gray-600 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-white transition ease-in-out duration-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
