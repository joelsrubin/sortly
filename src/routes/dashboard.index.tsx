import { createFileRoute } from '@tanstack/react-router';

import FeatureCard from '@/components/FeatureCard';
export const Route = createFileRoute('/dashboard/')({
  component: Inventory,
});

function Inventory() {
  return <FeatureCard />;
}
