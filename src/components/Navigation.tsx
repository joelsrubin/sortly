import { Link } from '@tanstack/react-router';

import DarkModeToggle from '@/components//ui/DarkModeToggle';
import { Wrench } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-primary-light dark:text-primary-dark flex items-center gap-2"
          >
            SupplyLine
            <Wrench className="w-6 h-6" />
          </Link>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link
                to={'/dashboard'}
                className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark"
              >
                Dashboard
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
