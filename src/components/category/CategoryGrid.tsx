import CategoryCard from "components/category/CategoryCard.tsx";
import SkeletonCategoryCard from "components/category/SkeletonCategoryCard.tsx";
import { Category } from "types/types.ts";

type CategoryGridProps = {
  categories: Category[] | undefined;
  isLoading: boolean;
  edit: (id: number) => void;
  remove: (id: number) => void;
};

const CategoryGrid = ({ categories, isLoading, remove, edit }: CategoryGridProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {isLoading && Array.from(Array(8).keys()).map((index) => <SkeletonCategoryCard key={index} />)}
      {categories?.map((category) => (
        <CategoryCard key={category.id} edit={edit} remove={remove} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
