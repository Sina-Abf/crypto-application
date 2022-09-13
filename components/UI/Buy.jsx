import Image from 'next/image';
import { ArrowIcon } from './Svgs';
import UsaFlag from '../../public/united-states-of-america.png';

export const BuyAmount = ({ title }) => {
  return (
    <div className="border border-primary rounded-xl p-4 flex justify-around items-center px-8 max-w-sm flex-1 w-1/2">
      <div className="flex items-center gap-x-8">
        <span className="text-primary text-sm">{title}</span>
        <span className="w-[1px] h-8 bg-primary" />
      </div>
      <span className="ml-2">5000</span>
    </div>
  );
};

export const BuyChoose = () => {
  return (
    <div className="flex ml-8 border border-primary rounded-xl items-center px-4 py-3 space-x-2 min-w-fit">
      <span className="min-w-fit">
        <Image width={30} height={30} src={UsaFlag} alt="usa-flag" />
      </span>
      <span>USD</span>
      <span>
        <ArrowIcon />
      </span>
    </div>
  );
};
