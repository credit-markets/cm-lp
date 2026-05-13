import { Component, type ErrorInfo, type ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      componentStack: info.componentStack,
    });
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    if (this.props.fallback) return this.props.fallback;
    return (
      <div className="flex min-h-screen items-center justify-center bg-deep-black text-clean-white px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4 tracking-wider">Something went wrong</h1>
          <p className="text-depth-gray mb-6">An unexpected error occurred. Please refresh the page.</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-strategic-blue text-deep-black font-mono uppercase tracking-wider text-sm"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
