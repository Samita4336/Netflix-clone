import { useCallback, useEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs"
import AccountMenu from "./AccountMenu"

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                 setShowBackground(true)
            } else {
                setShowBackground(false)
             }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
        window.addEventListener('scroll', handleScroll)
        }
    },[])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);
       const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
      <nav className="w-full fixed z-40">
            
            <div className={`
        px-4
        ml-8
        md:px-16
        py-6
        flex
        flex-row
        items-center
      transition
      duration-500
      ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
      `}
      >
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
                <div className="ml-8 flex-row gap-7 hidden lg:flex">

                <NavbarItem label="Home"/>
                <NavbarItem label="Series"/>
                <NavbarItem label="Films"/>
                <NavbarItem label="New & Popular"/>
                <NavbarItem label="My List"/>
                <NavbarItem label="Browse by languages"/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu isVisible={ showMobileMenu } />
                </div>
                <div className="ml-auto flex flex-row gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsSearch />

                    </div>
                     <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsBell />

                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row cursor-pointer relative gap-2 items-center">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/netflix-profile-pictures.jpg" alt="profile" />
                     </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"} `} />
                        <AccountMenu isVisible={showAccountMenu} />
                                
                    </div>

                </div>
            </div>
      </nav>
  )
}

export default Navbar