import React, { ReactNode } from "react";
interface PagesWrapperProps {
  children: ReactNode;
}

function PagesWrapper({ children }: PagesWrapperProps) {
  return (
    <div className="container flex flex-col justify-center mx-auto items-center px-6 md:px-24 py-6">
      <div className="mt-10">
      {children}
      </div>
    </div>
  );
}

export default PagesWrapper;
