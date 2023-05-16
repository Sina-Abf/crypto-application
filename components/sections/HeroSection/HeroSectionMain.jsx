import Button from '../../UI/Button';
import HeroImage from '../../../public/illustrations/globe.png';
import OrangeCircle from '../../../public/particles/circle3.svg';
import PurpleCirlce from '../../../public/particles/circle2.svg';
import BlueCircle from '../../../public/particles/circle1.svg';
import Star from '../../../public/particles/star1.svg';
import Image from 'next/future/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { useRef } from 'react';
import { useEffect } from 'react';

const HeroSectionMain = () => {
  const shortAnimation = useRef(null);
  const shorterAnimation = useRef(null);
  const mediumAnimation = useRef(null);
  const particleAnimation = useRef(null);

  useEffect(() => {
    const firstAnim = shortAnimation.current;
    const secondAnim = shorterAnimation.current;
    const thirdAnim = mediumAnimation.current;
    const particleAnim = particleAnimation.current;

    gsap.fromTo(
      firstAnim,
      { translateX: -200 },
      {
        translateX: 0,
        duration: 2,
        scrollTrigger: {
          trigger: firstAnim,
        },
      }
    );
    gsap.fromTo(
      secondAnim,
      { translateX: -200 },
      {
        translateX: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: secondAnim,
        },
      }
    );

    gsap.fromTo(
      thirdAnim,
      { translateX: -200 },
      {
        translateX: 0,
        duration: 3,
        scrollTrigger: {
          trigger: thirdAnim,
        },
      }
    );

    gsap.fromTo(
      particleAnim,
      { translateX: -800 },
      {
        translateX: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: particleAnim,
        },
      }
    );
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mb-14">
      <div className="md:px-24 flex flex-col">
        <div className="mt-16 text-center md:text-start mb-6">
          <h3
            ref={particleAnimation}
            className="font-semibold text-secondary mb-2 md:text-2xl"
          >
            SIGN UP TODAY
          </h3>
          <div className="text-4xl md:text-6xl font-bold relative w-full">
            <h1 ref={shortAnimation}>The World&apos;s</h1>
            <h1 ref={shorterAnimation} className="text-blue-gradient py-2">
              Fastest Growing
            </h1>
            <h1 ref={mediumAnimation}>Crypto Web App</h1>
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
          <Button className="bg-secondary text-white min-w-fit hover:bg-transparent hover:text-secondary">
            Get Started
          </Button>
          <Button className="text-secondary hover:bg-secondary hover:text-white">
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
    </section>
  );
};
export default HeroSectionMain;
