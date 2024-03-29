import { MobileMenuButton } from "./MobileMenuButton";
import closeIcon from "./images/close.png"

export function MobileMenu({setOpenMobileMenu}) {
    return (
        <div className='bg-change-to-neutral100 fixed inset-0 z-50'>
            <div className="flex flex-col items-center gap-y-8 mt-60">
                <MobileMenuButton btnName="resume">Resume</MobileMenuButton>
                <MobileMenuButton btnName="project">Projects</MobileMenuButton>
                <MobileMenuButton btnName="contact">Contact</MobileMenuButton>
            </div>
            <button className="w-8 h-8 absolute top-10 right-3 hover:opacity-70" onClick={setOpenMobileMenu}>
                <img className="w-full h-full" src={closeIcon} alt="" />
            </button>
        </div>
    )
}