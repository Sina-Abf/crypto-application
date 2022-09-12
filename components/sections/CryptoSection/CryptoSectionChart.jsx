import { ArrowIcon, FireIcon } from '../../UI/Svgs';

const CryptoSectionChart = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-x-2 items-center">
          <span>
            <FireIcon />
          </span>
          <span className="font-semibold">Trending</span>
        </div>
        <div className="flex gap-x-1 items-center">
          <span className="text-primary">More</span>
          <span>
            <ArrowIcon className="stroke-primary -rotate-90" />
          </span>
        </div>
      </div>
      <div className="text-gray flex justify-around text-sm">
        <span>Name</span>
        <span>Price</span>
      </div>

      <div className="flex justify-around">
        <div className="flex gap-x-2">
          <span>icon</span>
          <span>name</span>
        </div>
        <div>
          <span>- or +</span>
          <span>$123</span>
        </div>
      </div>
    </div>
  );
};
export default CryptoSectionChart;
