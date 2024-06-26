import { IconEdit, IconExternalLink, IconTrash } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuItem } from "components/ui/dropdownMenu.tsx";
import Title from "components/ui/title.tsx";
import { Link } from "react-router-dom";
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
    <div className="relative flex w-full max-w-[315px] flex-col rounded-lg border border-gray-200 bg-white shadow">
      <div className="absolute top-1 right-1 z-10">
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

      <div className="group/item absolute w-full h-full">
        <Link aria-label={`Open category ${name}`} to={`/categories/${id}`}>
          <div className="absolute bg-black/70 text-white opacity-0 top-1/3 w-full invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 ease-in">
            <Title className="cursor-pointer py-6 font-title">
              Show category <IconExternalLink />
            </Title>
          </div>
        </Link>
      </div>

      <img
        className="h-64 w-full rounded-t-lg object-cover object-top"
        src={`${API_URL}/uploads/500_${image}`}
        alt={description}
        loading="lazy"
      />
      <div className="flex flex-grow flex-col overflow-hidden m-5">
        <h5 className="mb-2 text-2xl font-bold uppercase truncate tracking-tight text-black">{name}</h5>
        <p className="mb-3 flex-grow font-normal truncate text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
