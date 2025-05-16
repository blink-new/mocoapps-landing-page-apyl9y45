const VibeCodingSection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
    <div className="container mx-auto max-w-3xl text-center">
      <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-md">
        For Vibe Coders & Power Users
      </div>
      <h3 className="text-3xl font-bold mb-4 text-primary">Join the Vibe Coding Power Users Beta</h3>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
        Are you passionate about next-gen coding tools and automation? <br className="hidden md:inline" />
        Get early access to exclusive apps, features, and direct influence on our roadmap. <br />
        Sign up for the waitlist and become a beta tester for apps designed just for the Vibe Coding community.
      </p>
      <a
        href="https://www.vibecodingpowerusers.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-400 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:from-purple-700 hover:to-blue-700 transition-transform duration-200 border-2 border-white/30 dark:border-gray-900/30"
      >
        Join the Waitlist & Beta Test ↗
      </a>
    </div>
  </section>
);

export default VibeCodingSection;
