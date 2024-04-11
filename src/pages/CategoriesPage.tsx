import { Button } from "../components/ui/button.tsx";
import { IconPencilPlus } from "@tabler/icons-react";
import { useGetCategoriesQuery } from "../services/product.ts";
import CategoryGrid from "../components/category/CategoryGrid.tsx";
import { useState } from "react";
import CreateCategory from "../components/category/CreateCategory.tsx";

const CategoriesPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <>
      <div className="mb-3 flex flex-row-reverse">
        <Button variant="outlined" size="lg" onClick={() => setCreateModalOpen(true)}>
          <IconPencilPlus />
          Add new category
        </Button>
      </div>
      <CategoryGrid categories={data} isLoading={isLoading} />
      {createModalOpen && <CreateCategory open={createModalOpen} close={() => setCreateModalOpen(false)} />}
    </>
  );
};

export default CategoriesPage;
