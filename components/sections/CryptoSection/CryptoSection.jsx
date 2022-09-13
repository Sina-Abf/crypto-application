import CryptoSectionChart from './CryptoSectionChart';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { useRef } from 'react';
import { useEffect } from 'react';

const CryptoSection = ({ data }) => {
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

  const randDataFirst = data.slice(0, 4);
  const randDataSecond = data.slice(4, 8);
  const randDataThird = data.slice(8, 12);

  return (
    <section
      ref={sectionRef}
      className="bg-white rounded-2xl -mt-10 flex flex-col md:flex-row md:divide-x md:divide-gray/20 justify-around shadow-xl mb-8 mx-auto max-w-sm md:max-w-full md:mx-8"
    >
      <CryptoSectionChart data={randDataFirst} title="Trending" emojie="🤘" />
      <CryptoSectionChart
        data={randDataSecond}
        title="Recently Added"
        emojie="🆕"
      />
      <CryptoSectionChart data={randDataThird} title="On Fire" emojie="🔥" />
    </section>
  );
};
export default CryptoSection;
