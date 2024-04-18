import ProductGrid from "components/product/ProductGrid.tsx";
import { useGetProductsQuery } from "services/products.ts";

const ProductsPage = () => {
  // const params = useParams();
  const { data } = useGetProductsQuery();

  return (
    <>
      <ProductGrid products={data} />
    </>
  );
};

export default ProductsPage;
