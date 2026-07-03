import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-6 border border-red-200 bg-red-50 text-red-700 rounded-lg space-y-2">
          <h3 className="font-bold text-lg">Đã xảy ra sự cố!</h3>
          <p className="text-sm">Component này bị crash. Đây là Error Boundary bảo vệ ứng dụng.</p>
          <p className="text-xs font-mono bg-red-100 p-2 rounded">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded cursor-pointer"
          >
            Thử lại
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
