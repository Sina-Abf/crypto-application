import Image from 'next/image';
import BuyImage from '../../../public/illustrations/buy.png';
import { BuyAmount, BuyChoose } from '../../UI/Buy';
import Button from '../../UI/Button';

const BuySection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse px-4 md:px-24">
      <div>
        <Image src={BuyImage} alt="buy-illustration" />
      </div>
      <div className="mb-4  md:p-24">
        <h1 className="font-semibold max-w-xs text-2xl mb-5">
          Buy & trade on the original crypto exchange.
        </h1>
        <p className="text-gray text-sm md:max-w-lg mb-4">
          Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
          Coin. We accept BTC crypto-currency
        </p>
        <div className="flex flex-col gap-y-8">
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
    </section>
  );
};
export default BuySection;
