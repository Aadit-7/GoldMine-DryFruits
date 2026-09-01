import { useState } from "react";
import { Link, NavLink } from "react-router";

import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Nuts", path: "/category/nuts" },
    { name: "Berries", path: "/category/berries" },
    { name: "Dates", path: "/category/dates" },
    { name: "Seeds", path: "/category/seeds" },
    { name: "Gifts", path: "/category/gifts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl text-primary">
          Happilo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-md font-semibold transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-secondary-container"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden lg:flex relative">
            <input
              type="text"
              placeholder="Search..."
              className="
                w-72
                rounded-full
                border
                border-border-sage
                bg-surface-container-low
                py-2
                pl-4
                pr-10
                text-sm
                outline-none
                focus:border-primary
              "
            />

            <Search
              size={18}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-on-surface-variant
              "
            />
          </div>

          <Link
            to="/wishlist"
            className="text-primary hover:text-secondary-container"
          >
            <Heart size={21} />
          </Link>

          <Link
            to="/cart"
            className="relative text-primary hover:text-secondary-container"
          >
            <ShoppingCart size={21} />

            <span
              className="
                absolute
                -top-2
                -right-2
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-secondary-container
                text-[10px]
                font-bold
                text-text-ink
              "
            >
              2
            </span>
          </Link>

          <Link
            to="/auth"
            className="hidden md:block text-primary hover:text-secondary-container"
          >
            <User size={21} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border-sage bg-surface px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold text-on-surface-variant hover:text-primary"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
