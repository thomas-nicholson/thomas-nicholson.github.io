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
          aria-pressed={theme === 'dark'}
          onClick={toggleTheme}
          className="ml-auto p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700 lg:hidden z-50">
          <div className="flex h-full">
            <Link
              to="/"
              aria-label="Home"
              className="flex-1 flex items-center justify-center py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            <Link
              to="/projects"
              aria-label="Projects"
              className="flex-1 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faLaptopCode} size="lg" />
            </Link>
            <Link
              to="/blog"
              aria-label="Blog"
              className="flex-1 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faBook} size="lg" />
            </Link>
            <Link
              to="/contact"
              aria-label="Contact"
              className="flex-1 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </div>
        </div>
      </nav>
      <main className="p-4 pb-20 lg:pb-4">{children}</main>
    </div>
  );
};

export default Layout;
