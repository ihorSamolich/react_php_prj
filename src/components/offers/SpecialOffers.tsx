import OfferCard from "components/offers/OfferCard.tsx";
import React from "react";
import { useGetSpecialOffersQuery } from "services/offers.ts";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SpecialOffers: React.FC = () => {
  const { data } = useGetSpecialOffersQuery();

  return (
    <div className="h-96">
      <Swiper
        // loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {data?.map((offer) => (
          <SwiperSlide key={offer.id}>
            <OfferCard {...offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
