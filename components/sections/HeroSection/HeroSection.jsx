import Navbar from '../../Navbar';
import HeroSectionMain from './HeroSectionMain';

const HeroSection = () => {
  return (
    <section className="min-h-screen min-w-fit bg-primary-custom pb-10">
      <Navbar />
      <HeroSectionMain />
    </section>
  );
};
export default HeroSection;
