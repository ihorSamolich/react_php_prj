import { IconArrowBackUp } from "@tabler/icons-react";
import ProductGrid from "components/product/ProductGrid.tsx";
import { Button } from "components/ui/Button/button.tsx";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "services/products.ts";

const ProductsPage = () => {
  const navigate = useNavigate();

  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetProductsByCategoryQuery({
    id: categoryId,
    page: Number(searchParams.get("page")) || 1,
  });

  return (
    <div>
      <div className="mb-3 flex flex-row ">
        <Button variant="outlined" onClick={() => navigate(-1)}>
          <IconArrowBackUp />
          Back
        </Button>
      </div>
      <ProductGrid products={data?.data} totalPages={data?.last_page} isLoading={isLoading} />
    </div>
  );
};

export default ProductsPage;
