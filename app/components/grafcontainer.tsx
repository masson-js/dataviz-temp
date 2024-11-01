import React, { ReactNode } from "react";

interface GrafContainerProps {
  children: ReactNode;
}

const GrafContainer: React.FC<GrafContainerProps> = ({ children }) => {
  return (
    <div className="flex w-auto h-auto">
      {children}
    </div>
  );
};

export default GrafContainer;
