import DiscountCard from "components/offers/DiscountCard.tsx";
import DiscountCardSkeleton from "components/offers/DiscountCardSkeleton.tsx";
import { useGetProductsDiscountsQuery } from "services/products.ts";

const Discounts = () => {
  const { data, isLoading } = useGetProductsDiscountsQuery();

  return (
    <>
      <p className="m-5 text-4xl font-title font-semibold text-white text-center">
        <span className="before:block before:absolute before:-inset-2 before:-inset-x-5 before:-skew-y-2 before:bg-orange-500 relative inline-block">
          <span className="relative uppercase">special deals</span>
        </span>
      </p>

      <div className="container grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   mx-auto">
        {isLoading && Array.from(Array(4).keys()).map((index) => <DiscountCardSkeleton key={index} />)}
        {data?.slice(0, 4).map((product) => <DiscountCard key={product.id} {...product} />)}
      </div>
    </>
  );
};

export default Discounts;
