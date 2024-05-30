import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="flex border-b border-gray-600 py-4 px-4 sm:px-10 bg-[#0F172B] text-gray-200 font-sans min-h-[70px] container relative z-50">
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        <Link className="md:text-3xl text-xl font-bold" to="/">
          EpicEats
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
