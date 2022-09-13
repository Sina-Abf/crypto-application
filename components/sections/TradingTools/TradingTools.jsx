import Image from 'next/future/image';
import tradingToolsImage from '../../../public/illustrations/tradingtools.png';
import starIcon from '../../../public/particles/star1.svg';
import Button from '../../UI/Button';

const TradingTools = () => {
  return (
    <section>
      <div className="flex flex-col md:gap-x-8 md:flex-row-reverse">
        <div className="relative mb-5">
          <Image
            width={750}
            height={750}
            src={tradingToolsImage}
            alt="trading-tools"
          />
          <Image
            className="absolute top-10 left-10"
            src={starIcon}
            alt="trading-tools"
          />
        </div>
        <div className="ml-10 flex-col flex gap-y-10">
          <h1 className="text-2xl font-semibold md:font-bold md:text-3xl">
            Advanced Trading <span className="text-blue-gradient">Tools</span>
          </h1>
          <div className="flex flex-col gap-y-4 md:max-w-xl">
            <h3 className="font-medium text-xl">
              Professional Access, Non-stop Availability
            </h3>
            <p className="text-gray">
              We provide premium access to crypto trading for both individuals
              and institutions through high liquidity, reliable order execution
              and constant uptime.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:max-w-xl">
            <h3 className="font-medium text-xl">A Range of Powerful Apis</h3>
            <p className="text-gray">
              Set up your own trading interface or deploy your algorithmic
              strategy with our high-performance FIX and HTTP APIs. Connect to
              our WebSocket for real-time data streaming.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 md:max-w-xl">
            <h3 className="font-medium text-xl">Customer Support</h3>
            <p className="text-gray mb-8">
              Premium 24/7 support available to all customers worldwide by phone
              or email. Dedicated account managers for partners.
            </p>
            <div className="px-8 font-medium flex flex-col md:flex-row items-center">
              <Button className="w-full text-secondary border-2 py-5 mb-4">
                Get Started
              </Button>
              <h3 className="underline text-secondary text-center w-full mb-4">
                Learn More
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TradingTools;
