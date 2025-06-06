import { useState } from "react";
import { MenuIcon, X, XIcon } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex h-16 items-center px-4 md:px-6 bg-background border-b shadow backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mr-6 flex items-center hover:bg-accent hover:rounded-full">
        <a href="/">
          <img src="CH_Icon.png" className="max-w-12 max-h-12" />
        </a>
        <span className="sr-only">Change Heng</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-4">
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#home"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            Home
          </a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#about"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            About
          </a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#services"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            Services
          </a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#products"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            Products
          </a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#qa"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            Q&A
          </a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a
            href="/#contact"
            className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-muted-foreground ml-auto"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-red-500 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-100 transition-colors"
              aria-label="Close navigation"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
            <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
              >
                Home
              </a>
            </div>
            <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
              >
                About
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
