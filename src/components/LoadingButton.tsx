import React from "react";
import Button from "@mui/material/Button";
import { LoadingButtonProps } from "../types/common";

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  onClick,
  buttonText,
}) => {
  return (
    <Button variant="outlined" onClick={onClick} disabled={loading}>
      {loading ? "시간표 생성 중..." : buttonText}
    </Button>
  );
};

export default LoadingButton;
