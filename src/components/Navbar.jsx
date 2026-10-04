import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/companyData";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Fungsi pengecekan status aktif
  const checkIsActive = (href) => {
    // Jika rute adalah path halaman (misal: "/showcase")
    if (href.startsWith("/")) {
      return location.pathname === href;
    }
    // Jika rute adalah section hash di Home (misal: "#home")
    if (isHomePage && href === "#home") {
      return location.pathname === "/" && !location.hash;
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111415]/80 backdrop-blur-md border-b border-[#e9c349]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWG5kY8qV893C13xEqyCngBgE8wkt5hp9R4lIphMVeqiXOfa_Eqiuz0PxUKGFbQOihyS6UeiLGHRzEJLJxJvjqCkjGDSX_ouDlYeSGVWScwnA9HIMvpAhQh-8Fr_ilSC8vDpsGWi6XgOB1fiWAWGK0yPEkBS13bO-wsc4KMXanTFE_Yedi7mGKYHQI5tyRyxDdmR7gXkSRBpZfYJj73k405HUmvomiAvGMKdGcJF06skwQjXlkWDs8B8JflT2uiIiAfZMQAnDf-U"
            alt="Allstars Enterprise Logo"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm font-medium tracking-wide">
          {navLinks.map((link, index) => {
            const isPageLink = link.href.startsWith("/");
            const isActive = checkIsActive(link.href);

            const activeClass = isActive
              ? "text-[#e9c349] border-b-2 border-[#e9c349] font-semibold"
              : "text-[#c4c6cf] hover:text-[#e9c349]";

            return isPageLink ? (
              <Link
                key={index}
                to={link.href}
                className={`transition-colors duration-300 py-1 ${activeClass}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={index}
                href={isHomePage ? link.href : `/${link.href}`}
                className={`transition-colors duration-300 py-1 ${activeClass}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#e9c349] text-[#111415] text-xs font-semibold px-5 py-2.5 rounded hover:bg-[#d8b238] transition-colors inline-block"
          >
            Consult Our Team
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-[#e9c349] focus:outline-none p-1"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111415]/95 border-b border-[#e9c349]/20 px-6 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link, index) => {
              const isPageLink = link.href.startsWith("/");
              const isActive = checkIsActive(link.href);

              const mobileActiveClass = isActive
                ? "text-[#e9c349] font-semibold"
                : "text-[#c4c6cf] hover:text-[#e9c349]";

              return isPageLink ? (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${mobileActiveClass}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${mobileActiveClass}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#e9c349] text-[#111415] text-xs font-semibold px-5 py-3 rounded text-center mt-2"
          >
            Consult Our Team
          </a>
        </div>
      )}
    </header>
  );
}