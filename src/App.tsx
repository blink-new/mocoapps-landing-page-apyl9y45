import Hero from './components/Hero';
import AppCard, { AppCardProps } from './components/AppCard';
import Footer from './components/Footer';
import Header from './components/Header';
import VibeCodingSection from './components/VibeCodingSection';

const apps: AppCardProps[] = [
  {
    title: "Balance Boost Prototype",
    description: "Balance Boost app prototype for youth",
    tag: "Prototype",
    link: "https://balanceboost.mocoapps.com",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: "Web Style Selector",
    description: "Discover your favorite web app style for us to build into an app",
    tag: "AI",
    link: "https://webstyle.mocoapps.com",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: "Coming Soon",
    description: "More innovative tools are on the way!",
    tag: "Coming Soon",
    link: "#",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: "Coming Soon",
    description: "More innovative tools are on the way!",
    tag: "Coming Soon",
    link: "#",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="catalog" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">App Catalog</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our collection of tools and apps designed to make your life easier and more productive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apps.map((app, index) => (
                <AppCard key={index} {...app} />
              ))}
            </div>
            {/* Extra MoCo AI block below catalog */}
            <div className="mt-16 flex flex-col items-center">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 px-8 py-6 shadow-xl flex flex-col md:flex-row items-center gap-4">
                <span className="text-white text-lg font-semibold mb-2 md:mb-0">Discover more at</span>
                <a
                  href="https://www.mocoai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-white/20 text-white font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-colors duration-200"
                >
                  www.mocoai.com ↗
                </a>
              </div>
            </div>
          </div>
        </section>
        <VibeCodingSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;