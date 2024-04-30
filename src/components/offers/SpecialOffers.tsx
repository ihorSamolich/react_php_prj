import OfferCard from "components/offers/OfferCard.tsx";
import OfferCardSkeleton from "components/offers/OfferCardSkeleton.tsx";
import React from "react";
import { useGetSpecialOffersQuery } from "services/offers.ts";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SpecialOffers: React.FC = () => {
  const { data, isLoading } = useGetSpecialOffersQuery();

  return (
    <div className="h-[300px]">
      <Swiper
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
        {isLoading && (
          <SwiperSlide>
            <OfferCardSkeleton />
          </SwiperSlide>
        )}
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
