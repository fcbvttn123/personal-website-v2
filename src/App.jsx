import { useState, createContext } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { MobileMenu } from './components/MobileMenu/MobileMenu'
import { MainSection } from './components/main/MainSection'
import { Footer } from './components/footer/Footer'
import { Resume } from './components/resume/Resume'

export const mainSectionContext = createContext()

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [currentMainSection, setCurrentMainSection] = useState("mainSection")

  // Handle sections displayed Main Section

  let mainSection = <Resume />
  // if(currentMainSection == "mainSection") {
  //   mainSection = <MainSection moveToResumeSection={moveToResumeSection}/>
  // } else if(currentMainSection == "resume") {
  //   mainSection = <Resume />
  // }

  function moveToResumeSection() {
    setCurrentMainSection("resume")
  }

  // Open/Close Mobile Menu

  function onClickOpenMobileMenu() {
    setOpenMobileMenu(prev => !prev)
  }

  return (
    <mainSectionContext.Provider value={{setCurrentMainSection, onClickOpenMobileMenu}}>
      {openMobileMenu && <MobileMenu setOpenMobileMenu={onClickOpenMobileMenu}/>}
      <Header setOpenMobileMenu={onClickOpenMobileMenu} />
      {mainSection}
      <Footer />
    </mainSectionContext.Provider>
  )
}

export default App




// Template: https://www.wix.com/website-template/view/html/2846?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fresumes-cvs&tpClick=view_button&esi=79799d78-9fbc-4e0a-853f-8093d4bb5d02

// Issues

  // Header: Align the role (front-end dev)

  // Header: drop animation when closing the mobile menu

  // Footer: does not take up full height in md screen

  // Structure again the main section