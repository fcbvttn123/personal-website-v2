export function Circle({children, backgroundColor, moveUpAnimation}) {
    return (
        <button className={`${backgroundColor} ${moveUpAnimation} opacity-0 translate-y-24 flex-1 rounded-full aspect-square border border-black text-xl font-semibold transition-all duration-500 hover:bg-white`}>
            {children}
        </button>
    )
}