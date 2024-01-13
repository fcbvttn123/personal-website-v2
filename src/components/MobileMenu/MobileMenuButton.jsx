export function MobileMenuButton({children}) {
    return (
        <button className="text-2xl font-light hover:text-amber-500 transition-all duration-300 drop-animation">
            {children}
        </button>
    )
}