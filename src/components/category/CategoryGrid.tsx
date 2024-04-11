import { Category } from "../../types/types.ts";
import CategoryCard from "./CategoryCard.tsx";
import SkeletonCategoryCard from "./SkeletonCategoryCard.tsx";

type CategoryGridProps = {
  categories: Category[] | undefined;
  isLoading: boolean;
};

const CategoryGrid = ({ categories, isLoading }: CategoryGridProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {isLoading && Array.from(Array(8).keys()).map((index) => <SkeletonCategoryCard key={index} />)}
      {categories?.map((category) => <CategoryCard key={category.id} {...category} />)}
    </div>
  );
};

export default CategoryGrid;
