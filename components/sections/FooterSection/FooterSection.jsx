import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Button from '../../UI/Button';
import { ArrowUpIcon } from '../../UI/Svgs';

const FooterSection = () => {
  return (
    <footer className="px-4 pb-8">
      <div className="flex flex-col md:flex-row md:justify-around border-y border-y-gray/20">
        <div className="mb-4 pt-4">
          <Image src={logo} alt="logo" />
        </div>
        <ul className="flex flex-col gap-y-4 text-gray font-medium border-b border-gray/20 md:border-r md:border-gray/20 md:border-b-0 md:pr-8 py-4">
          <li>Buy Crypto</li>
          <li>Exchanges</li>
          <li>Watchlist</li>
          <li>Portfolio</li>
          <li>NFT</li>
        </ul>
        <ul className="flex flex-col gap-y-4 text-gray font-medium border-b border-gray/20 md:border-r md:border-gray/20 md:border-b-0 md:pr-8 py-4">
          <li>Products</li>
          <li>Abous Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Security</li>
        </ul>
        <ul className="flex flex-col gap-y-4 text-gray font-medium border-b border-gray/20 md:border-r md:border-gray/20 md:border-b-0 md:pr-8 py-4">
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>System Status</li>
          <li>Area of Avaibility</li>
          <li>Privacy Policy</li>
        </ul>

        <div className="flex flex-col gap-y-4 text-gray font-medium py-4">
          <h3>Newsletter</h3>
          <p className="font-normal max-w-xs">
            Never miss anything crypto when you&apos;re on the go
          </p>
          <div className="flex px-4 md:px-0 gap-x-4">
            <div className="rounded-xl border border-gray text-gray/70 p-4 flex-1 font-normal">
              Enter Your Email
            </div>
            <Button className="text-white bg-secondary hover:bg-transparent hover:text-secondary rounded-lg">
              <ArrowUpIcon className="rotate-90 w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
      <p className="text-center pt-4 text-sm text-gray">
        © Copyright 2022{' '}
        <a
          className="hover:text-secondary transition-colors duration-200 mx-1"
          href="https://github.com/Sina-Abf"
          rel="noreferrer"
          target="_blank"
        >
          Sina Abdollahi
        </a>
        All rights reserved
      </p>
    </footer>
  );
};
export default FooterSection;
