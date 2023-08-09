import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto text-black bg-white">
      <nav className="flex flex-wrap justify-between p-4">
        <div className="flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden px-2 py-1">
          <FontAwesomeIcon icon={faBars} />
        </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${menuOpen ? '' : 'hidden lg:flex'}`}>
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Home</Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:underline">About</Link>
            <Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Projects</Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Contact</Link>
            <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Blog</Link>
          </div>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
