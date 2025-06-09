import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Products", href: "/#products" },
  { name: "Q&A", href: "/#qa" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full flex h-16 items-center px-4 md:px-6 bg-background border-b shadow backdrop-blur supports-[backdrop-filter]:bg-background/80"
      aria-label="แถบนำทางหลักของเว็บไซต์ ช่างเฮง"
    >
      <div className="mr-6 flex items-center hover:bg-accent hover:rounded-full">
        <a href="/">
          <img
            src="CH_Icon.png"
            className="max-w-12 max-h-12"
            alt="โลโก้บริษัท ช่างเฮง"
          />
        </a>
        <span className="sr-only">Change Heng</span>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex gap-4"
        aria-label="ลิงก์นำทางสำหรับหน้าต่าง ๆ"
      >
        {navigationItems.map((item) => (
          <div
            key={item.name}
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <a
              href={item.href}
              className="hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          </div>
        ))}
      </nav>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-auto"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full h-full [&>button]:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <SheetClose asChild>
                <button
                  className="text-black transition-colors hover:text-green-500"
                  aria-label="Close navigation"
                >
                  <X className="h-8 w-8" />
                </button>
              </SheetClose>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col px-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-4 text-2xl font-medium text-black transition-colors hover:text-white p-4 rounded-lg hover:bg-green-500"
                    >
                      <span>{item.name}</span>
                    </a>
                  </SheetClose>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
