import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Film, Menu, X, House } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  return (
    <header className="bg-black-wash/95 border-b border-tawny-olive/50 shadow-xl shadow-corn-harvest/30 p-3 fixed w-full top-0 left-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-4xl font-bold text-tawny-olive flex items-center gap-2"
          >
            <Film className="w-8 h-8" /> MovieDB
          </Link>
          <SearchBar className="hidden md:flex" />
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200"
                : "text-tawny-olive hover:bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200"
            }
          >
            <House className="w-6 h-6" />
          </NavLink>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200"
                : "text-tawny-olive hover:bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200"
            }
          >
            Populární filmy
          </NavLink>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <X size={32} className="text-tawny-olive cursor-pointer" />
          ) : (
            <Menu size={32} className="text-tawny-olive cursor-pointer" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen 
                    bg-black-wash/80 flex flex-col items-center justify-center 
                      space-y-8 md:hidden backdrop-blur-sm z-40"
        >
          <SearchBar className="flex items-center justify-center mb-10 ml-10" />
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200 text-2xl"
                : "text-tawny-olive font-bold hover:bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200 text-2xl"
            }
          >
            Domů
          </NavLink>
          <NavLink
            to="/popular"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200 text-2xl"
                : "text-tawny-olive font-bold hover:bg-corn-harvest/20 py-2 px-2 rounded-lg transition-colors duration-200 text-2xl"
            }
          >
            Populární filmy
          </NavLink>
        </div>
      )}
    </header>
  )
};
export default Navbar;
