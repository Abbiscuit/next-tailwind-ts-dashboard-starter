import { NextPage } from 'next';
import { FooterProps } from '../../interfaces';

import { Header } from '../header';

const Layout: NextPage<FooterProps> = ({ children, footer }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      <Header />
      <main>{children}</main>

      {footer && (
        <footer className="fixed bottom-0 px-4 py-4 bg-white w-full border-t">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            atque!
          </p>
        </footer>
      )}
    </div>
  );
};

export default Layout;
