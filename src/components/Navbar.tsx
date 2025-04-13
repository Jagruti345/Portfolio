import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-grey-900 via-grey-900 to-black-800 shadow-lg'
          : 'bg-gradient-to-r from-grey-900/90 via-black-900/90 to-grey-400/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Portfolio Title */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent tracking-wider">
          Jagruti's Portfolio
        </h1>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-white font-medium">
          {['Home', 'About', 'Skills',  'Projects' , 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-300 transition duration-200 hover:underline underline-offset-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
