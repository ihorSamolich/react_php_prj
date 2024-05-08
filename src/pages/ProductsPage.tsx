import { IconArrowBackUp, IconPencilPlus } from "@tabler/icons-react";
import CreateProduct from "components/product/CreateProduct.tsx";
import ProductGrid from "components/product/ProductGrid.tsx";
import { Button } from "components/ui/Button/button.tsx";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "services/products.ts";

const ProductsPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetProductsByCategoryQuery({
    id: categoryId,
    page: Number(searchParams.get("page")) || 1,
  });

  return (
    <div>
      <div className="mb-3 flex flex-col sm:flex-row-reverse justify-between gap-y-3">
        <Button variant="outlined" size="lg" onClick={() => setCreateModalOpen(true)}>
          <IconPencilPlus />
          Add new product
        </Button>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          <IconArrowBackUp />
          Back
        </Button>
      </div>
      <ProductGrid products={data?.data} totalPages={data?.last_page} isLoading={isLoading} />
      {createModalOpen && <CreateProduct open={createModalOpen} close={() => setCreateModalOpen(false)} />}
    </div>
  );
};

export default ProductsPage;
