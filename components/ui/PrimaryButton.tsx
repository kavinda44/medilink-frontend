import { cn } from "@/lib/utils";
import React from "react";

const PrimaryButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "text-background from-primary to-primary-light flex items-center justify-center gap-[0.5em] rounded-[1em] bg-linear-to-r px-[1em] py-[0.8em] font-medium transition-all duration-300 ease-in enabled:focus:brightness-110 enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
