import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../img/header/logo3.png";

const Header = () => {
  return (
    <header className="bg-gray-900 fixed w-full px-8 lg:px-24 z-30 h-24 lg:h-36 flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold justify-end">
          <Link to={"/"} className="text-[#e9e9e9] hover:text-[#bbaeae]  transition">Home</Link>
          <Link to={"/about"} className="text-[#e9e9e9] hover:text-[#bbaeae] transition">About</Link>
          <Link to={"/portfolio"} className="text-[#e9e9e9] hover:text-[#bbaeae] transition">Portfolio</Link>
          <Link to={"/contact"} className="text-[#e9e9e9] hover:text-[#bbaeae] transition">Contact</Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
