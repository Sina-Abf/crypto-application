import Image from 'next/image';
import BuyImage from '../../../public/illustrations/buy.png';
import { BuyAmount, BuyChoose } from '../../UI/Buy';
import Button from '../../UI/Button';
import partner1 from '../../../public/partners/partner1.png';
import partner2 from '../../../public/partners/partner2.png';
import partner3 from '../../../public/partners/partner3.png';
import partner4 from '../../../public/partners/partner4.png';

const BuySection = () => {
  return (
    <section className="md:px-24 bg-primary-custom-buy">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="px-2">
          <Image src={BuyImage} alt="buy-illustration" />
        </div>
        <div className="mb-4 md:p-24 px-8">
          <h1 className="font-semibold max-w-xs text-2xl mb-5">
            Buy & trade on the original crypto exchange.
          </h1>
          <p className="text-gray text-sm md:max-w-lg mb-4">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
            Coin. We accept BTC crypto-currency
          </p>
          <div className="flex flex-col gap-y-8 mr-2">
            <div className="flex items-center">
              <BuyAmount title="Amount" />
              <BuyChoose />
            </div>
            <div className="flex items-center">
              <BuyAmount title="Amount" />
              <BuyChoose />
            </div>
          </div>
          <Button className="w-full md:max-w-lg bg-secondary text-white px-4 mt-8 hover:bg-transparent hover:text-secondary">
            Buy Now
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col px-3 mb-44">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-medium mb-2">
            Trusted Partners Worldwide
          </h1>
          <p className="text-gray text-md">
            We&apos;re partners with countless major organisations around the
            globe
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-2/3 sm:w-fit">
          <Image src={partner1} alt="partner-1" />
          <Image src={partner2} alt="partner-2" />
          <Image src={partner3} alt="partner-3" />
          <Image src={partner4} alt="partner-4" />
        </div>
      </div>
    </section>
  );
};
export default BuySection;
