import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "/vite.svg";

const Header = () => {
  return (
    <header className="flex w-full justify-between border-b shadow-sm py-4 px-4 sm:px-10 text-[#0F172B] font-sans min-h-[70px] container relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <Link
          className="md:text-3xl text-xl font-bold flex items-center gap-2"
          to="/"
        >
          <img src={logo} alt="logo" className="w-7 h-7 md:w-8 md:h-8" />
          <span>EpicEats</span>
        </Link>

        <MainNav />

        <div className="md:hidden ml-auto">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
