import Image from 'next/future/image';
import photo1 from '../../../public/illustrations/signup.png';
import photo2 from '../../../public/illustrations/wallet.png';
import photo3 from '../../../public/illustrations/okay.png';
import Arrow from '../../../public/arrow.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { useRef } from 'react';
import { useEffect } from 'react';

const GetStartedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, translateY: 100 },
      {
        opacity: 1,
        duration: 1,
        translateY: 0,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="mb-32">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-semibold text-xl mb-10">
          Get started in just a few minutes
        </h3>
        <div className="flex flex-col gap-y-6 md:flex-row md:px-24 px-6">
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={photo1} alt="photo-1" />
            <h3 className="font-semibold text-xl mb-4">Sign Up</h3>
            <p className="max-w-md text-gray">
              Buy Bitcoin or Ethereum, then securely store it in your Wallet or
              send it on easily to friends
            </p>
          </div>
          <Image className="hidden md:block" src={Arrow} alt="Arrow" />
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={photo2} alt="photo-2" />
            <h3 className="font-semibold text-xl mb-4">Fund</h3>
            <p className="max-w-md text-gray">
              Choose your preferred payment method such as bank transfer or
              credit card to top up your NEFA Wallet
            </p>
          </div>
          <Image className="hidden md:block" src={Arrow} alt="Arrow" />
          <div className="text-center flex flex-col justify-center items-center">
            <Image src={photo3} alt="photo-3" />
            <h3 className="font-semibold text-xl mb-4">Buy Crypto</h3>
            <p className="max-w-md text-gray">
              Sign up for your free NEFA Wallet on web, iOS or Android and
              follow our easy process to set up your profile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetStartedSection;
