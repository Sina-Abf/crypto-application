/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Navbar from '../Navbar';
import Button from '../UI/Button';
import HeroImage from '../../public/illustrations/globe.png';
import HeroSectionMain from './HeroSectionMain';

const HeroSection = () => {
  return (
    <section className="min-h-screen min-w-fit bg-primary-custom">
      <Navbar />
      <HeroSectionMain />
    </section>
  );
};
export default HeroSection;
