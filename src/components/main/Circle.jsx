export function Circle({children, backgroundColor}) {
    return (
        <button className={`${backgroundColor} flex-1 rounded-full aspect-square border border-black text-xl font-semibold transition-all duration-500 hover:bg-white`}>
            {children}
        </button>
    )
}