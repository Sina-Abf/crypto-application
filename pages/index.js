import Head from 'next/head';
import BuySection from '../components/sections/BuySection/BuySection';
import CreditSection from '../components/sections/CreditSection/CreditSection';
import CryptoSection from '../components/sections/CryptoSection/CryptoSection';
import FaqSection from '../components/sections/FaqSection/FaqSection';
import FooterSection from '../components/sections/FooterSection/FooterSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import SecuritySection from '../components/sections/SecuritySection/SecuritySection';
import TradingTools from '../components/sections/TradingTools/TradingTools';

export default function Home({ data }) {
  return (
    <div className="min-w-fit container max-w-screen-xl mx-auto">
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <HeroSection />
      <CryptoSection data={data} />
      <BuySection />
      <CreditSection />
      <TradingTools />
      <SecuritySection />
      <GetStartedSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export async function getStaticProps() {
  const firstData = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'
  );
  const firstRes = await firstData.json();

  return {
    props: {
      data: firstRes,
    },
    revalidate: 5,
  };
}
