'use client'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '../LanguageSwitch/LocaleSwitcher';
import Image from "next/image";
import { useState } from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
  }
  
  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <li className={`text-sm mx-2 p-2 rounded-md transition-all ${isHovered ? 'animate-btnHover' : 'animate-btnHoverR'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Link href={href}>
          {children}
        </Link>
      </li>
    );
  };
  
  interface DropNavLinkProps {
    href: string;
    children: React.ReactNode;
  }
  
  const DropNavLink: React.FC<DropNavLinkProps> = ({ href, children }) => {
    return (
      <li className={`mx-2 p-2 rounded-md hover:bg-gray-700 hover:text-white`}>
        <Link href={href} className="text-sm w-full h-full">
          {children}
        </Link>
      </li>
    );
  };
  
  function DropdownMenu({children} : {children: React.ReactNode}) {
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
          {children}
        </ul>
      </div>
    );
  }
  
  
  interface NavbarProps {
    locale: string;
  }

  const Navbar: React.FC<NavbarProps> = ({ locale }) => {
    const t = useTranslations('Navbar')
    return (
      <div className="navbar bg-neutral py-[32px] px-[16px]" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}} >
        <div className="navbar-start">
          <Image
            src={"/sus.png"}
            width={200}
            height={75}
            alt="Logo Firmy KALA"
            className="kalaowimglogo"
            unoptimized = {true}
          />
        </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink href={'/'}>{t('Main')}</NavLink>
            <NavLink href={'/Kontakt'}>{t('Contact')}</NavLink>
            <NavLink href={'/Pokoje'}>{t('Rooms')}</NavLink>
            <NavLink href={'/FAQ'}>{t('FAQ')}</NavLink>
            <NavLink href={'/Grupy'}>{t('Groups')}</NavLink>
            <NavLink href={'/Regulamin'}>{t('Statue')}</NavLink>
          </ul>
        </div>
        <DropdownMenu>
            <DropNavLink href={'/'}>{t('Main')}</DropNavLink>
            <DropNavLink href={'/Kontakt'}>{t('Contact')}</DropNavLink>
            <DropNavLink href={'/Pokoje'}>{t('Rooms')}</DropNavLink>
            <DropNavLink href={'/FAQ'}>{t('FAQ')}</DropNavLink>
            <DropNavLink href={'/Grupy'}>{t('Groups')}</DropNavLink>
            <DropNavLink href={'/Regulamin'}>{t('Statue')}</DropNavLink>
        </DropdownMenu>
        <div className="navbar-end flex items-center">
        <LocaleSwitcher />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
