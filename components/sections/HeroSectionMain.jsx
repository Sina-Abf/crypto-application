import Button from '../UI/Button';
import HeroImage from '../../public/illustrations/globe.png';
import OrangeCircle from '../../public/particles/circle3.svg';
import PurpleCirlce from '../../public/particles/circle2.svg';
import BlueCircle from '../../public/particles/circle1.svg';
import Star from '../../public/particles/star1.svg';
import Image from 'next/future/image';

const HeroSectionMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-24 flex flex-col">
        <div className="mt-16 text-center md:text-start mb-6">
          <h3 className="font-semibold text-secondary mb-2 md:text-2xl">
            SIGN UP TODAY
          </h3>
          <div className="text-4xl md:text-6xl font-bold relative">
            <h1>The World&apos;s</h1>
            <h1 className="text-blue-gradient py-2">Fastest Growing</h1>
            <h1>Crypto Web App</h1>
            <Image
              className="absolute top-0 right-[10%] hidden md:block"
              src={Star}
              alt="star"
              loading="eager"
            />
          </div>
        </div>
        <p className="max-w-xl mb-8 hidden md:block text-gray">
          Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank
          transfers or your credit/debit card.
        </p>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 max-w-sm mx-auto md:m-0 relative">
          <Button className="bg-secondary py-6 text-white min-w-fit hover:bg-transparent hover:text-secondary">
            Get Started
          </Button>
          <Button className="py-6 text-secondary hover:bg-secondary hover:text-white">
            Download App
          </Button>
        </div>
        <div className="hidden md:block p-12 relative">
          <Image
            className="absolute bottom-0 left-0"
            src={PurpleCirlce}
            alt="purple-circle"
            loading="eager"
          />
        </div>
      </div>
      <div className="hidden md:block px-8 relative">
        <Image src={HeroImage} alt="globe" loading="eager" />
        <Image
          className="absolute right-[15%] bottom-[35%]"
          src={OrangeCircle}
          alt="orange-circle"
          loading="eager"
        />
        <Image
          className="absolute top-[5%]"
          src={BlueCircle}
          alt="purple-circle"
          loading="eager"
        />
      </div>
    </div>
  );
};
export default HeroSectionMain;
