import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl text-primary">
          Explore the Future with MoCo Apps
        </h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A growing catalog of smart tools, local utilities, and creative prototypes by The MoCo AI Company.
        </p>
        <div className="flex flex-col items-center gap-4 mb-2">
          <a
            href="https://www.mocoai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-xs px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 border-2 border-white/30 dark:border-gray-900/30"
          >
            Visit The MoCo AI Company ↗
          </a>
          <a
            href="#catalog"
            className="inline-block w-full max-w-xs px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 border-2 border-white/30 dark:border-gray-900/30"
          >
            Explore Our Apps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;