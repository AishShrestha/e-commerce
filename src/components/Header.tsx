import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full py-2 justify-between items-center px-4 md:px-5 relative">
      {/* Search Bar */}
      <div className="relative flex items-center border-none flex-1 max-w-5 md:max-w-3xs">
        <Search className="absolute left-4 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 w-full focus:outline-none md:hover:border-b md:focus:border-b-2"
        />
      </div>

      {/* Logo */}
      <Logo />

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-14 right-0 w-48 bg-white shadow-md flex flex-col items-start p-4 md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent md:shadow-none md:p-0 z-10 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link to="" className="py-2 md:py-0 hover:underline ">
          Cart
        </Link>
        <Link to="/login" className="py-2 md:py-0 hover:underline">
          Login
        </Link>
        <Link to="/signup" className="py-2 md:py-0 hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Header;
