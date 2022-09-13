import CryptoSectionChart from './CryptoSectionChart';

const CryptoSection = ({ data }) => {
  const randDataFirst = data.slice(0, 4);
  const randDataSecond = data.slice(4, 8);
  const randDataThird = data.slice(8, 12);

  console.log(randDataSecond);
  return (
    <section className="bg-white rounded-2xl -mt-10 flex flex-col md:flex-row md:divide-x md:divide-gray/20 justify-around shadow-xl mb-8 mx-auto max-w-sm md:max-w-full md:mx-8">
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
