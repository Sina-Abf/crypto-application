/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Navbar from '../Navbar';
import Button from '../UI/Button';
import HeroImage from '../../public/illustrations/globe.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen min-w-fit bg-primary-custom">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-24 flex flex-col">
          <div className="mt-16 text-center md:text-start mb-6">
            <h3 className="font-semibold text-secondary mb-2 md:text-2xl">
              SIGN UP TODAY
            </h3>
            <div className="text-4xl md:text-6xl font-bold">
              <h1>The World's</h1>
              <h1 className="text-blue-gradient py-2">Fastest Growing</h1>
              <h1>Crypto Web App</h1>
            </div>
          </div>
          <p className="max-w-xl mb-8 hidden md:block text-gray">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            bank transfers or your credit/debit card.
          </p>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 max-w-sm mx-auto md:m-0">
            <Button className="bg-secondary py-6 text-white min-w-fit hover:bg-transparent hover:text-secondary">
              Get Started
            </Button>
            <Button className="py-6 text-secondary hover:bg-secondary hover:text-white">
              Download App
            </Button>
          </div>
        </div>
        <div className="hidden md:block px-8">
          <Image src={HeroImage} alt="globe" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
