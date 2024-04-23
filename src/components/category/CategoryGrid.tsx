import EmptyData from "components/EmptyData.tsx";
import Pagination from "components/Pagination.tsx";
import CategoryCard from "components/category/CategoryCard.tsx";
import SkeletonCategoryCard from "components/category/SkeletonCategoryCard.tsx";
import { Category } from "types/types.ts";

type CategoryGridProps = {
  categories: Category[] | undefined;
  totalPages: number | undefined;
  isLoading: boolean;
  edit: (id: number) => void;
  remove: (id: number) => void;
};

const CategoryGrid = ({ categories, isLoading, remove, edit, totalPages }: CategoryGridProps) => {
  return (
    <>
      <div className="flex flex-col items-center sm:grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
        {isLoading && Array.from(Array(4).keys()).map((index) => <SkeletonCategoryCard key={index} />)}
        {categories?.map((category) => (
          <CategoryCard key={category.id} edit={edit} remove={remove} category={category} />
        ))}
      </div>
      {categories?.length === 0 && <EmptyData />}
      <Pagination totalPages={totalPages || 0} />
    </>
  );
};

export default CategoryGrid;
