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
    <div className="min-h-screen bg-cm-bg flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-cm-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Error 404
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-cm-text tracking-tight">
            Page Not Found
          </h1>
          <p className="mb-8 text-cm-text-2 text-lg">
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-cm-accent text-white rounded-lg font-medium text-sm hover:bg-cm-accent-hover transition-colors"
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
