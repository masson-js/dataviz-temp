import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <section className='flex w-full justify-center flex-col items-center'>
      <div className="flex m-4 justify-center items-center w-auto h-auto bg-slate-100">
      {children}
      </div>
    </section>
  );
};

export default ContentContainer;