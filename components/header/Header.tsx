import Link from 'next/link';
import { NextPage } from 'next';

const Header: NextPage = () => {
  return (
    <header className="px-4 py-2 border-b bg-white fixed top-0 w-full">
      <nav className="flex items-center">
        <Link href="/">
          <a className="px-4 py-2 inline-block text-xl">Nav Logo</a>
        </Link>

        <ul className="ml-auto flex items-center">
          <li>
            <Link href="/">
              <a className="px-4 py-2 inline-block ml-4 text-xl"> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="px-4 py-2 inline-block ml-4 text-xl"> About </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
