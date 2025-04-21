import { Link } from '@tanstack/react-router';

import DarkModeToggle from './ui/DarkModeToggle';

const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-primary-light dark:text-primary-dark"
          >
            Sortly
          </Link>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link
                to={'/features'}
                className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
              >
                Features
              </Link>
            </div>
            <div className="border-l border-gray-200 dark:border-gray-700 pl-6">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
