import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Organize Your Life with Sortly
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        The smart way to keep track of everything that matters. Simple,
        efficient, and beautiful.
      </p>
      <div className="flex justify-center space-x-4">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
};

export default Hero;
