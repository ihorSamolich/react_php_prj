import { IconPencilPlus } from "@tabler/icons-react";
import CategoryEdit from "components/category/CategoryEdit.tsx";
import CategoryGrid from "components/category/CategoryGrid.tsx";
import CreateCategory from "components/category/CreateCategory.tsx";
import { Button } from "components/ui/Button/button.tsx";
import { Input } from "components/ui/input.tsx";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "services/category.ts";
import { useDebouncedCallback } from "use-debounce";
import showToast from "utils/toastUtils.ts";

const CategoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

  const { data: categories, isLoading } = useGetCategoriesQuery({
    page: Number(searchParams.get("page")) || 1,
    search: searchParams.get("search") || "",
  });
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

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      searchParams.set("search", term);
      searchParams.set("page", "1");

      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, 400);

  return (
    <div>
      <div className="mb-3 flex flex-col sm:flex-row-reverse justify-between gap-y-3">
        {/*<Button variant="outlined" size="lg" onClick={() => setCreateModalOpen(true)}>*/}
        {/*  <IconPencilPlus />*/}
        {/*  Add new category*/}
        {/*</Button>*/}

        <Input
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="flex"
          variant="search"
          placeholder="Search..."
        />
      </div>
      <CategoryGrid
        categories={categories?.data}
        totalPages={categories?.last_page}
        edit={handleEditCategory}
        remove={handleDeleteCategory}
        isLoading={isLoading}
      />
      {/*{createModalOpen && <CreateCategory open={createModalOpen} close={() => setCreateModalOpen(false)} />}*/}
      {/*{editModalOpen && currentCategory && (*/}
      {/*  <CategoryEdit id={currentCategory} open={editModalOpen} close={() => setEditModalOpen(false)} />*/}
      {/*)}*/}
    </div>
  );
};

export default CategoriesPage;
