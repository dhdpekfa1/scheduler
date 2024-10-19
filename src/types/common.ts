import { ReactNode } from "react";

// ErrorBoundary
export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

// LoadingButton
export interface LoadingButtonProps {
  loading: boolean;
  onClick: () => void;
  buttonText: string;
}
