import { Sparkle } from "lucide-react";

const navLinks = [
  { name: "Catalog", href: "#catalog" },
  { name: "MoCo AI", href: "https://www.mocoai.com", external: true },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 shadow-lg group-hover:scale-105 transition-transform">
            <Sparkle className="text-white w-6 h-6" />
          </span>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent select-none">
            MoCo Apps
          </span>
        </a>
        <nav>
          <ul className="flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-1"
                >
                  {link.name}
                  <span className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
