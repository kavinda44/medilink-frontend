import React from "react";
import { LifeLine } from "react-loading-indicators";

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[1em] opacity-30">
      <LifeLine color="var(--secondary)" size="medium" speedPlus={-5} />
      <p className="animate-pulse">{text}</p>
    </div>
  );
};

export default Loading;
