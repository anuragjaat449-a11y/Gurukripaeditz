import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // FIX: Switched to a constructor for state initialization to resolve issues with 'this.props' not being recognized.
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-brand-cream dark:bg-black">
            <div className="w-32 h-32 text-brand-maroon/70 dark:text-brand-gold/70">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Error icon"
                >
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
          <h1 className="mt-8 text-4xl font-serif-decorative text-brand-maroon dark:text-brand-gold">Something went wrong.</h1>
          <p className="mt-4 max-w-md text-lg text-black/80 dark:text-white/80">
            An unexpected error has occurred. We've been notified. Please try refreshing the page to continue.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 py-3 px-8 rounded-md text-lg font-bold btn-premium"
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
