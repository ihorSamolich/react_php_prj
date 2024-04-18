import { IconPencilPlus } from "@tabler/icons-react";
import CategoryEdit from "components/category/CategoryEdit.tsx";
import CategoryGrid from "components/category/CategoryGrid.tsx";
import CreateCategory from "components/category/CreateCategory.tsx";
import { Button } from "components/ui/Button/button.tsx";
import { useState } from "react";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "services/category.ts";
import showToast from "utils/toastUtils.ts";

const CategoriesPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

  const { data, isLoading } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id).unwrap();
      showToast(`Category ${id} successful deleted!`, "success");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      showToast(`Error deleted ${id} category! ${err.error}`, "error");
    }
  };

  const handleEditCategory = async (id: number) => {
    try {
      setCurrentCategory(id);
      setEditModalOpen(true);
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      showToast(`Error edited category! ${err.error}`, "error");
    }
  };

  return (
    <>
      <div className="mb-3 flex flex-row-reverse">
        <Button variant="outlined" size="lg" onClick={() => setCreateModalOpen(true)}>
          <IconPencilPlus />
          Add new category
        </Button>
      </div>
      <CategoryGrid
        categories={data}
        edit={handleEditCategory}
        remove={handleDeleteCategory}
        isLoading={isLoading}
      />
      {createModalOpen && <CreateCategory open={createModalOpen} close={() => setCreateModalOpen(false)} />}
      {editModalOpen && currentCategory && (
        <CategoryEdit id={currentCategory} open={editModalOpen} close={() => setEditModalOpen(false)} />
      )}
    </>
  );
};

export default CategoriesPage;
