import menuIcon from "./images/hamburger-icon.png"

export function Header({setOpenMobileMenu}) {
    return (
        <header className="flex items-center py-10">
            <div className="w-11/12 mx-auto max-w-screen-2xl flex items-center justify-between">
                <div className="flex items-stretch flex-wrap gap-x-3 gap-y-2">
                    <a className="flex items-center gap-x-3" href="#">
                        <div className="w-9 h-9 bg-amber-600 rounded-full"></div>
                        <p className="text-2xl font-extrabold">David Vu</p>
                    </a>
                    <p className="grid place-content-center">Front-end Developer</p>
                </div>
                <button className="w-8 h-8 hover:opacity-70 md:hidden" onClick={setOpenMobileMenu}>
                    <img className="w-full h-full" src={menuIcon} alt="" srcset="" />
                </button>
                <div className="hidden md:flex items-center gap-x-4">
                    <button className="border-r border-black pr-4 hover:text-amber-500 transition-all duration-300">Resume</button>
                    <button className="border-r border-black pr-4 hover:text-amber-500 transition-all duration-300">Projects</button>
                    <button className="hover:text-amber-500 transition-all duration-300">Contact</button>
                </div>
            </div>
        </header>
    )
}