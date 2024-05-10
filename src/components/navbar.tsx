import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaXmark,FaBars } from "react-icons/fa6";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    //set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setisSticky(true);
            }
            else{
                setisSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    });

    const navItems = [
        {"link": "Home", "path":"home"},
        {"link": "About", "path":"about"},
        {"link": "Services", "path":"Services"},
        {"link": "Careers", "path":"careers"},
        {"link": "Partners", "path":"partners"},
        {"link": "Contact", "path":"contact"},
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky? "sticky top-0 left-0 right-0 border-b bg-white duration-300":""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="" className="w-14 h-14 md:w-37 md:h-37 inline-block items-center"/>
                        <span className="text-titleFont">DIGITAL DREAM</span>
                    </a>
                    {/* nav items for large devices */}
                    <ul className="hidden md:flex items-center space-x-12">
                        {
                        navItems.map((item, index) => <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">{item.link}</Link>)
                        }
                    </ul> 
                    <div className="space-x-12 hidden lg:flex items-ceter">
                      
                    </div>

                    <div className="md:hidden">
                        <button 
                        onClick={toggleMenu}
                        className="focus:outline-none focus:text-gray-500">
                            {
                                isMenuOpen ? (<FaXmark className="h-6 w-6 text-gray900"/>) : (<FaBars className="h-6 w-6 text-gray900"/>)

                            }
                        </button>
                    </div>
                </div>

                <div className={`px-4 py-7 mt-15 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map((item, index) => <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className="block py-3 text-base text-white800 hover:text-white first:font-medium">{item.link}</Link>)
                }
                </div>

                {/* <div className={`w-100 space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 " : "hidden"}`}>
                {
                        navItems.map((item, index) => <Link key={index} to={item.path} spy={true} smooth={true} offset={-100} className="block text-base text-white800 hover:text-white first:font-medium">{item.link}</Link>)
                        }
                </div> */}
            </nav>
        </header>
    );
}

export default NavBar;