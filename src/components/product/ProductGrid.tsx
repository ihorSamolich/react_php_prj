import ProductCard from "components/product/ProductCard.tsx";
import { Product } from "types/types.ts";

type ProductGridProps = {
  products: Product[] | undefined;
};
const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {products?.map((product) => <ProductCard key={product.id} {...product} />)}
    </div>
  );
};

export default ProductGrid;
