import { Component, ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../types/common";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  // 에러 발생 시 상태를 업데이트하여 대체 UI를 렌더링
  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // 에러 정보를 콘솔이나 로깅 서비스로 전달
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>오류가 발생했습니다. 다시 시도해 주세요.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
