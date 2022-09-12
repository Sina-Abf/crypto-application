import Image from 'next/image';
import logo from '../public/logo.svg';
import { useState } from 'react';
import Button from './UI/Button';
import { ArrowIcon } from './UI/Svgs';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center p-8 pt-12 md:hidden">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <button
          onClick={() => setOpenNav((prevState) => !prevState)}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {openNav && (
          <ul className="md:hidden absolute bg-secondary text-white w-2/3 left-[20%] flex flex-col justify-center items-center gap-y-2 mt-72 rounded-xl p-2">
            <li>CryptoCurrency</li>
            <li>Exchanges</li>
            <li>Watchlist</li>
            <li>NFT</li>
            <li>Portfolio</li>
            <li className="flex items-center gap-x-2">
              <span>Products</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </li>
          </ul>
        )}
      </nav>

      <nav className="justify-between items-center p-8 pt-12 px-24 hidden md:flex gap-x-20">
        <div className="flex items-center">
          <div className="min-w-fit">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="flex gap-x-10 ml-5 text-black mr-20">
            <li>CryptoCurrency</li>
            <li>Exchanges</li>
            <li>Watchlist</li>
            <li>NFT</li>
            <li>Portfolio</li>
            <li className="flex items-center gap-x-2">
              <span>Products</span>
              <span>
                <ArrowIcon />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-2 pr-10">
          <Button className="text-secondary hover:bg-secondary hover:text-white">
            Login
          </Button>
          <Button className="bg-secondary text-white hover:bg-transparent hover:text-secondary">
            Sign up
          </Button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
