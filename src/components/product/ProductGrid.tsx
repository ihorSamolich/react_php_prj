import EmptyData from "components/EmptyData.tsx";
import Pagination from "components/Pagination.tsx";
import SkeletonCategoryCard from "components/category/SkeletonCategoryCard.tsx";
import ProductCard from "components/product/ProductCard.tsx";
import { Product } from "types/types.ts";

type ProductGridProps = {
  products: Product[] | undefined;
  totalPages: number | undefined;
  isLoading: boolean;
};
const ProductGrid = ({ products, isLoading, totalPages }: ProductGridProps) => {
  return (
    <>
      <div className="flex flex-col items-center sm:grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isLoading && Array.from(Array(4).keys()).map((index) => <SkeletonCategoryCard key={index} />)}
        {products?.map((product) => <ProductCard key={product.id} {...product} />)}
      </div>
      {products?.length === 0 && <EmptyData />}
      <Pagination totalPages={totalPages || 0} />
    </>
  );
};

export default ProductGrid;
