import BigDeal from '@/components/BigDeal';
import BigDealBanner from '@/components/BigDealBanner';
import FeaturedCollection from '@/components/FeaturedCollection';
import HeroBanner from '@/components/HeroBanner';
import NewArrivals from '@/components/NewArrivals';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <NewArrivals />
      <BigDealBanner />
      <FeaturedCollection />
      <BigDeal />
    </div>
  );
}
