import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <section className='flex w-full justify-center flex-col items-center'>
      <span>Select container what you prefere</span>
      {children}
    </section>
  );
};

export default ContentContainer;