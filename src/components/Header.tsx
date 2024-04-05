"use client";

import { useRef } from "react";
import logoimg from "../assets/Main/sus.png";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

const Header = () => {
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  return (
    <header className="flex items-center justify-between py-4 shadow shadow-gray-200 bg-baseOne transition-colors duration-300 lg:px-[160px] sm:px-[40px] px-[16px]">
      <div>
        <Image
          src={logoimg}
          width={"200"}
          height={"75"}
          alt="Logo ośrodka wczasowego"
          className="kalaowimglogo"
        />
      </div>

      <div ref={themeSwitcherRef}>
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
