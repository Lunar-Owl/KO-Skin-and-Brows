import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EE]/95 backdrop-blur-md border-b border-[#A67C52]/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group"
          >
            <span className="block text-2xl md:text-3xl font-light tracking-wide text-[#2A2A2A]">
              KO
            </span>

            <span className="block -mt-1 text-[10px] uppercase tracking-[0.25em] text-[#A67C52]">
              Skin & Brows
            </span>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-[#A67C52]"
                      : "text-[#2A2A2A] hover:text-[#A67C52]"
                  }`
                }
              >
                {item.name}

                <span
                  className="absolute left-0 right-0 -bottom-1 mx-auto h-px bg-[#A67C52]
                  scale-x-0 transition-transform duration-300
                  group-hover:scale-x-100"
                />
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="ml-2 bg-[#A67C52] text-white px-6 py-3 rounded-full text-sm tracking-wide hover:bg-[#8F6845] transition-colors"
            >
              Book Now
            </NavLink>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-[#2A2A2A]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#A67C52]/10 py-6">

            <div className="flex flex-col">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `py-4 text-sm tracking-wide border-b border-[#A67C52]/10 transition-colors
                    ${
                      isActive
                        ? "text-[#A67C52]"
                        : "text-[#2A2A2A] hover:text-[#A67C52]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="mt-6 text-center bg-[#A67C52] text-white px-6 py-4 rounded-full text-sm tracking-wide"
              >
                Book Appointment
              </NavLink>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}