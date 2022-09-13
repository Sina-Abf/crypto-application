import Image from 'next/image';
import { ArrowIcon } from '../../UI/Svgs';
import redChart from '../../../public/charts/down.svg';
import greenChart from '../../../public/charts/up.svg';

const CryptoSectionChart = ({ data, title, emojie }) => {
  return (
    <div className="mb-10 w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-x-2 items-center">
          <span className="w-5">{emojie}</span>
          <span className="font-semibold">{title}</span>
        </div>
        <div className="flex gap-x-1 items-center">
          <span className="text-primary">More</span>
          <span>
            <ArrowIcon className="stroke-primary -rotate-90" />
          </span>
        </div>
      </div>
      <div className="text-gray flex justify-around text-sm mb-5">
        <span>Name</span>
        <span>Price</span>
        <span className="hidden md:block">Chart</span>
      </div>

      <ul className="flex flex-col items-center px-4 gap-y-8 divide-y divide-gray/20">
        {data?.map((currency) => {
          return (
            <li
              key={currency.id}
              className="flex items-center justify-around gap-x-4 w-full pt-4"
            >
              <div className="flex items-center gap-x-2 text-center min-w-fit px-2 md:px-0">
                <Image
                  src={currency.image}
                  alt={currency.id}
                  width={30}
                  height={30}
                />
                <span>
                  {currency.id.charAt(0).toUpperCase() + currency.id.slice(1)}
                </span>
              </div>

              <div className="space-x-1">
                {currency.price_change_percentage_24h > 0 ? (
                  <span className="text-green font-semibold">+</span>
                ) : (
                  <span className="text-red font-semibold">-</span>
                )}
                <span>${currency.current_price.toLocaleString('en')}</span>
              </div>

              <div className="hidden md:block">
                {currency.price_change_percentage_24h > 0 ? (
                  <Image src={greenChart} alt="green-chart" />
                ) : (
                  <Image src={redChart} alt="red-chart" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CryptoSectionChart;
