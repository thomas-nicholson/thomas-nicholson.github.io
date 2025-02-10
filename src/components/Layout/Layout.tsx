import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptopCode, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto text-black bg-white">
      <nav className="flex flex-wrap justify-between p-4">
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Home</Link>
            <Link to="/projects" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Projects</Link>
            <Link to="/blog" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Blog</Link>
            <Link to="/contact" className="lg:inline-block lg:mt-0 px-4 py-2 hover:underline">Contact</Link>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden z-50">
          <div className="flex justify-around p-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gray-900"
              onClick={async () => {
                if ('vibrate' in navigator) {
                  try {
                    // Request permission through a user gesture
                    if ('permissions' in navigator) {
                      const result = await navigator.permissions.query({ name: 'vibrate' as PermissionName });
                      if (result.state === 'granted') {
                        navigator.vibrate(50);
                      }
                    } else {
                      // Fallback for browsers that don't support the Permissions API
                      navigator.vibrate(50);
                    }
                  } catch (error) {
                    console.log('Vibration not supported');
                  }
                }
              }}
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-gray-900"
              onClick={async () => {
                if ('vibrate' in navigator) {
                  try {
                    // Request permission through a user gesture
                    if ('permissions' in navigator) {
                      const result = await navigator.permissions.query({ name: 'vibrate' as PermissionName });
                      if (result.state === 'granted') {
                        navigator.vibrate(50);
                      }
                    } else {
                      // Fallback for browsers that don't support the Permissions API
                      navigator.vibrate(50);
                    }
                  } catch (error) {
                    console.log('Vibration not supported');
                  }
                }
              }}
            >
              <FontAwesomeIcon icon={faLaptopCode} size="lg" />
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-gray-900"
              onClick={async () => {
                if ('vibrate' in navigator) {
                  try {
                    // Request permission through a user gesture
                    if ('permissions' in navigator) {
                      const result = await navigator.permissions.query({ name: 'vibrate' as PermissionName });
                      if (result.state === 'granted') {
                        navigator.vibrate(50);
                      }
                    } else {
                      // Fallback for browsers that don't support the Permissions API
                      navigator.vibrate(50);
                    }
                  } catch (error) {
                    console.log('Vibration not supported');
                  }
                }
              }}
            >
              <FontAwesomeIcon icon={faBook} size="lg" />
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-gray-900"
              onClick={async () => {
                if ('vibrate' in navigator) {
                  try {
                    // Request permission through a user gesture
                    if ('permissions' in navigator) {
                      const result = await navigator.permissions.query({ name: 'vibrate' as PermissionName });
                      if (result.state === 'granted') {
                        navigator.vibrate(50);
                      }
                    } else {
                      // Fallback for browsers that don't support the Permissions API
                      navigator.vibrate(50);
                    }
                  } catch (error) {
                    console.log('Vibration not supported');
                  }
                }
              }}
            >
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