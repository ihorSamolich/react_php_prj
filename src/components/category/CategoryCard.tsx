import { IconArrowBigRightLinesFilled, IconEdit, IconTrash } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuItem } from "components/ui/dropdownMenu.tsx";
import LinkNav from "components/ui/linkNav.tsx";
import { Category } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

type CategoryCardProps = {
  category: Category;
  edit: (id: number) => void;
  remove: (id: number) => void;
};

const CategoryCard = (props: CategoryCardProps) => {
  const { category, remove, edit } = props;
  const { id, name, description, image } = category;

  return (
    <div className="relative flex w-full max-w-[315px] flex-col rounded-lg border border-gray-200 bg-white shadow lg:max-w-full">
      <div className="absolute top-1 right-1">
        <DropdownMenu>
          <DropdownMenuItem onClick={() => edit(id)}>
            <IconEdit />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => remove(id)} className="text-red-600 hover:text-red-100">
            <IconTrash />
            Delete
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
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
