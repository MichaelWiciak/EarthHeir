// components/ErrorBoundary.tsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    // You could also report it to an error-tracking service here
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    return (
      <AnimatePresence mode="wait" initial={false}>
        {this.state.hasError ? (
          <motion.div
            key="error-ui"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 p-6"
          >
            <motion.img
              src="/sustainedLogo.png"
              alt="Sustained Logo"
              className="mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              {...{
                style: {
                  width: "20vw",
                  height: "auto",
                  maxWidth: "200px",
                  minWidth: "100px",
                  ...(typeof window !== "undefined" &&
                    window.matchMedia &&
                    window.matchMedia("(max-width: 640px)").matches && {
                      width: "60vw",
                      maxWidth: "320px",
                    }),
                },
              }}
            />

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something went wrong.
            </h1>
            <p className="text-gray-600 mb-4 text-center max-w-sm">
              We’re very sorry about that. Let’s get you back on track! Please
              try refreshing the page.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
            >
              🔄 Refresh
            </button>
          </motion.div>
        ) : (
          <motion.div key="main-ui" className="w-full">
            {this.props.children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}

export default ErrorBoundary;
