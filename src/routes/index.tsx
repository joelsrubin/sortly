import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Organize Your Life with SupplyLine
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        The smart way to keep track of everything that matters. Simple,
        efficient, and beautiful.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
