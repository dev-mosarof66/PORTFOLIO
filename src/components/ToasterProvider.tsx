"use client";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        success: {
          style: {
            background: "#10B981",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#EF4444", 
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
