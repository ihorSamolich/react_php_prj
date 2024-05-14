import HowWork from "components/HowWork.tsx";
import Discounts from "components/offers/Discounts.tsx";
import SpecialOffers from "components/offers/SpecialOffers.tsx";

const HomePage = () => {
  return (
    <>
      <SpecialOffers />
      <Discounts />
      <HowWork />
    </>
  );
};

export default HomePage;
