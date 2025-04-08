import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavBarProps {
  isAboutVisible: boolean;
  isContactVisible: boolean;
  isMiddleVisible: boolean;
}

const NavBar = ({ isAboutVisible, isMiddleVisible, isContactVisible }: NavBarProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950 text-white py-4 shadow-lg">
      <div className="flex items-center justify-between w-5/6 mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className={`${
            isAboutVisible
              ? "logo-about"
              : isContactVisible
              ? "logo-contact"
              : isMiddleVisible
              ? "logo-middle"
              : "logo"
          } logo text-3xl font-semibold`}
        >
          FITNESS HUB
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-lg items-center">
          <Link to="/" className="hover:text-[#5927ef] transition-colors">
            <a href="#home">Home</a>
          </Link>
          <a
            href="#exercises"
            className="hover:text-[#5927ef] transition-colors"
          >
            Exercises
          </a>
          <a href="#about" className="hover:text-[#5927ef] transition-colors">
            About Us
          </a>
          <a href="#contact" className="hover:text-[#5927ef] transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? (
              <FaTimes className="hover:text-[#5927ef]" />
            ) : (
              <FaBars className="hover:text-[#5927ef]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-zinc-950 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          <Link
            to="/"
            className="text-xl font-semibold hover:text-[#5927ef] transition-colors"
          >
            Home
          </Link>
          <a
            href="#exercises"
            className="text-xl font-semibold hover:text-[#5927ef] transition-colors"
          >
            Exercises
          </a>
          <a
            href="#about"
            className="text-xl font-semibold hover:text-[#5927ef] transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-xl font-semibold hover:text-[#5927ef] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
