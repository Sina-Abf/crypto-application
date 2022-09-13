import Image from 'next/image';
import creditImage from '../../../public/illustrations/credit-card.png';
import Button from '../../UI/Button';
import { CheckboxIcon } from '../../UI/Svgs';

const CreditSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-4">
          <Image src={creditImage} alt="credit-card" />
        </div>
        <div className="px-4">
          <h1 className="w-2/3 text-2xl font-semibold mb-4 md:text-4xl">
            Introducing the <span className="text-blue-gradient">NEFA</span>{' '}
            Credit Card
          </h1>
          <p className="text-gray mb-7 md:w-2/3">
            Subject to cardholder and rewards terms which will be available at
            application.
          </p>
          <ul className="flex flex-col gap-y-4 ml-4 mb-8">
            <li className="flex gap-x-3 items-center">
              <span>
                <CheckboxIcon />
              </span>
              <span>Up to 3% back on purchases</span>
            </li>
            <li className="flex gap-x-3 items-center">
              <span>
                <CheckboxIcon />
              </span>
              <span>Earn rewards in bitcoin or any crypto on NEFA</span>
            </li>
            <li className="flex gap-x-3 items-center">
              <span>
                <CheckboxIcon />
              </span>
              <span>No annual fee</span>
            </li>
          </ul>
          <div className="px-8">
            <Button className="w-full text-secondary border-2 py-4 font-medium md:w-1/2 hover:bg-secondary hover:text-white">
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreditSection;
