import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptopCode, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../../hooks/useTheme';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="container mx-auto min-h-screen text-gray-800 dark:text-gray-100">
      <nav className="flex flex-wrap justify-between p-4">
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Home</Link>
            <Link to="/projects" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Projects</Link>
            <Link to="/blog" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Blog</Link>
            <Link to="/contact" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Contact</Link>
          </div>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
          className="ml-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden z-50">
          <div className="flex h-full">
            <Link to="/" className="flex-1 flex items-center justify-center py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            <Link to="/projects" className="flex-1 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <FontAwesomeIcon icon={faLaptopCode} size="lg" />
            </Link>
            <Link to="/blog" className="flex-1 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <FontAwesomeIcon icon={faBook} size="lg" />
            </Link>
            <Link to="/contact" className="flex-1 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </div>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
