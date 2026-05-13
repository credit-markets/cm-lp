import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found", { path: location.pathname });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-strategic-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Error 404
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-clean-white tracking-wider">
            Page Not Found
          </h1>
          <p className="mb-8 text-depth-gray text-lg">
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-strategic-blue text-deep-black font-bold font-mono uppercase tracking-wider text-sm hover:bg-strategic-blue/90 transition-colors"
          >
            Return Home
          </a>
        </div>
      </main>
      <TerminalFooter />
    </div>
  );
};

export default NotFound;
