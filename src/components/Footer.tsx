import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-12 bg-gradient-to-t from-blue-50/60 via-white/80 to-transparent dark:from-gray-900/80 dark:via-gray-950/90 dark:to-transparent border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 shadow-lg">
            <Twitter className="text-white w-5 h-5" />
          </span>
          <a
            href="https://twitter.com/mocoais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
          >
            @mocoais
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Built by <span className="font-bold text-blue-700 dark:text-blue-300">The MoCo AI Company</span> —
            <a
              href="https://www.mocoai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-2 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100"
            >
              www.mocoai.com
            </a>
          </p>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-blue-500/30 via-purple-400/20 to-blue-400/30 blur-sm opacity-70 pointer-events-none" />
    </footer>
  );
};

export default Footer;
