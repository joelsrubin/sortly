import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Navigation from '@/components/Navigation';
import Container from '@/components/layout/Container';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <Navigation />
        <Container>
          <Outlet />
        </Container>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
