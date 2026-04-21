import { cn } from "@/lib/utils";
import React from "react";

const GradientText: React.FC<
  React.HTMLAttributes<HTMLSpanElement> & { text: string }
> = ({ text, className, ...props }) => {
  return (
    <span
      className={cn(
        "from-primary to-primary-light bg-linear-to-r bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {text}
    </span>
  );
};

export default GradientText;
