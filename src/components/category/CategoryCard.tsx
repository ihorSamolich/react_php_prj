import { Category } from "../../types/types.ts";
import { API_URL } from "../../utils/apiUrl.ts";
import { IconArrowBigRightLinesFilled } from "@tabler/icons-react";
import LinkNav from "../ui/linkNav.tsx";

const CategoryCard = (category: Category) => {
  const { name, description, image } = category;

  return (
    <div className="flex w-full max-w-[315px] flex-col rounded-lg border border-gray-200 bg-white shadow lg:max-w-full">
      <img
        className="h-64 w-full rounded-t-lg object-cover object-top"
        src={`${API_URL}/uploads/500_${image}`}
        alt={description}
      />
      <div className="flex flex-grow flex-col p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <LinkNav path="#" title="Read more" icon={<IconArrowBigRightLinesFilled />} />
      </div>
    </div>
  );
};

export default CategoryCard;
