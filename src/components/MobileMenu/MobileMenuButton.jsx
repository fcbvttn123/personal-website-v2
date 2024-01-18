import { mainSectionContext } from "../../App"
import {useContext} from "react"

export function MobileMenuButton({children, btnName}) {
    const {setCurrentMainSection, onClickOpenMobileMenu} = useContext(mainSectionContext)
    return (
      <button
        onClick={() => {
            onClickOpenMobileMenu(prev => !prev)
            setCurrentMainSection(btnName && btnName)
        }}
        className="text-2xl font-light hover:text-amber-500 drop-animation"
      >
        {children}
      </button>
    );
}