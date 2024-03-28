"use client"

import Link from "next/link"
import Image from "next/image"
import {useState} from 'react';
import { useTranslation } from 'react-i18next';

const NavLink = ({ href, children }) => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <li className={`text-sm mx-2 p-2 rounded-md transition-all ${isHovered ? 'animate-btnHover' : 'animate-btnHoverR'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Link href={href}>
          {t(children)}
        </Link>
      </li>
    );
};
const DropNavLink = ({ href, children }) => {
    const { t } = useTranslation();
    return (
      <li className={`mx-2 p-2 rounded-md hover:bg-gray-700 hover:text-white`}>
        <Link href={href} className="text-sm w-full h-full">
        {t(children)}
        </Link>
      </li>
    );
};

function ThemeController() {
    const [isPinging, setPinging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleClick = () => {
        if (!isPinging) {
            setPinging(true);
      
            setTimeout(() => {
                setPinging(false);
            }, 800);
        }
    };
    return (
        <div className={`bg-base-200 p-1.5 rounded-full flex items-center justify-center w-16 h-16 ${isHovered ? 'animate-btnHover' : 'animate-themeCtr'}`}>
            <div className={`absolute bg-secondary rounded-full w-[45px] h-[45px] ${isPinging ? 'animate-ping' : 'hidden'}`}>
            </div>
          <label className="swap swap-rotate bg-thInside rounded-full w-[45px] h-[45px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <input onClick={handleClick} type="checkbox" className="theme-controller" value="light" />
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          </label>
        </div>
    );
}

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden focus:ring" onClick={toggleMenu}>
                <Image
                    src={'/burger-menu.svg'}
                    width={35}
                    height={35}
                    alt="DropDown Menu"
                    className="burger-dp-menu"
                />
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
                <DropNavLink href={'/'}>'page.home.title'</DropNavLink>
                <DropNavLink href={'/Kontakt'}>Kontakt</DropNavLink>
                <DropNavLink href={'/Pokoje'}>Pokoje</DropNavLink>
                <DropNavLink href={'/FAQ'}>FAQ</DropNavLink>
                <DropNavLink href={'/Grupy'}>Grupy</DropNavLink>
                <DropNavLink href={'/Regulamin'}>Regulamin</DropNavLink>
            </ul>
        </div>
    );
}



export default function Navbar() {
    return(
        <div className="navbar bg-neutral py-[32px] px-[16px]">
            <div className="navbar-start">
                <Image 
                    src={"/sus.png"}
                    width={200}
                    height={75}
                    alt="Logo Firmy KALA"
                    className="kalaowimglogo"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink href={'/'}>Strona Główna</NavLink>
                    <NavLink href={'/Kontakt'}>Kontakt</NavLink>
                    <NavLink href={'/Pokoje'}>Pokoje</NavLink>
                    <NavLink href={'/FAQ'}>FAQ</NavLink>
                    <NavLink href={'/Grupy'}>Grupy</NavLink>
                    <NavLink href={'/Regulamin'}>Regulamin</NavLink>
                </ul>
            </div>
                <DropdownMenu />
            <div className="navbar-end flex items-center">
                <ThemeController />
            </div>
            </div>
    )
}