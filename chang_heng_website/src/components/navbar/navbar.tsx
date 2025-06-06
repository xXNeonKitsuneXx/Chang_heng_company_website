export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex h-16 items-center px-4 md:px-6 bg-background border-b shadow backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mr-6 flex items-center hover:bg-accent hover:rounded-full">
        <a href="/">
          <img src="CH_Icon.png" className="max-w-12 max-h-12" />
        </a>
        <span className="sr-only">Change Heng</span>
      </div>
      <nav className="lg:flex gap-4">
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">Home</a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/#about" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">About</a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/#services" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">Services</a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/#products" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">Products</a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/#qa" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">Q&A</a>
        </div>
        <div className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <a href="/#contact" className="hover:text-[#17a44c] hover:border-b-2 hover:border-[#17a44c] transition-colors duration-200">Contact</a>
        </div>
      </nav>
    </header>
  );
};
