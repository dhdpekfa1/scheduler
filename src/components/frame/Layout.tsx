import { ReactNode } from 'react';
import { Header } from './';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex items-center justify-center bg-two'>
      <div className='m-0 p-0 min-h-screen flex flex-col w-full bg-[#f2f6f7] lg:max-w-[75%]'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export { Layout };
