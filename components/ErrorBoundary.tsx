import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // FIX: Replaced the constructor-based state initialization with a class property.
  // This standard approach resolves the type resolution issue where TypeScript
  // failed to recognize the `state` and `props` properties on the component instance.
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <svg
                className="w-24 h-24 text-brand-maroon/70 dark:text-brand-gold/70"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Error icon"
            >
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="4" opacity="0.6" />
                <path d="M40 40 L60 60 M60 40 L40 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          <h1 className="mt-8 text-4xl font-serif text-gradient-themed">Something went wrong.</h1>
          <p className="mt-4 text-lg text-black/80 dark:text-white/80">
            An unexpected error has occurred. We've been notified and are looking into it.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 py-2 px-6 rounded-md text-lg font-bold btn-premium"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;