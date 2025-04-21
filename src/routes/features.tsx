import { createFileRoute } from '@tanstack/react-router';
import FeaturesComponent from '../components/Features';

export const Route = createFileRoute('/features')({
  component: Features,
});

function Features() {
  return <FeaturesComponent />;
}

export default Features;
