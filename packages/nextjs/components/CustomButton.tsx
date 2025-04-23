import React from "react";

interface ButtonProps {
  text?: string;
  variant: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({ text, variant, className, icon, onClick, disabled = false }) => {
  return (
    <div
      className={`box-shadow-btn ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={disabled ? undefined : onClick}
    >
      <button
        className={`${variant === "primary" ? "btn-primary" : "btn-default"} flex items-center justify-center gap-1 font-medium rounded-xl px-2 py-1 capitalize h-[36px] ${className}`}
        disabled={disabled}
      >
        {text}
        {icon}
      </button>
    </div>
  );
};
