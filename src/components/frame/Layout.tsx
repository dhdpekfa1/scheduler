import { ReactNode } from 'react';
import { Header } from './';

interface LayoutProps {
  children: ReactNode;
  use?: 'home' | 'result';
}
const Layout = ({ children, use = 'home' }: LayoutProps) => {
  return (
    <div className='flex items-center justify-center bg-two'>
      <div
        className={`m-0 p-0 min-h-screen flex flex-col w-full lg:max-w-[75%] ${
          use === 'home' ? 'bg-[#f2f6f7]' : 'bg-blue'
        }`}
      >
        <Header />
        {children}
      </div>
    </div>
  );
};

export { Layout };
