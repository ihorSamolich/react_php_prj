import { IconEdit, IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuItem } from "components/ui/dropdownMenu.tsx";
import Text from "components/ui/text.tsx";
import { Product } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

const ProductCard = (product: Product) => {
  const { name, product_images, price } = product;

  return (
    <div className="border border-gray-200 max-w-[315px] bg-white shadow-2xl rounded-2xl cursor-pointer">
      <div className="relative rounded-t-2xl w-full overflow-hidden">
        <div className="absolute top-1 right-1 z-10">
          <DropdownMenu>
            <DropdownMenuItem onClick={() => console.log(name)}>
              <IconEdit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log(name)} className="text-red-600 hover:text-red-100">
              <IconTrash />
              Delete
            </DropdownMenuItem>
          </DropdownMenu>
        </div>

        <img
          loading="lazy"
          className="h-64 w-full object-cover object-center"
          src={`${API_URL}/uploads/500_${product_images[0].name}`}
          alt={name}
        />
        <div className="font-title flex justify-center absolute text-white bottom-0 left-0 right-0 p-2 bg-black/60">
          <div className="inline-block align-bottom mr-5">
            <span className="text-2xl leading-none align-baseline">$</span>
            <span className="font-bold text-4xl leading-none align-baseline">{Math.floor(price)}</span>
            <span className="text-2xl leading-none align-baseline">.{(price % 1).toFixed(2).slice(2)}</span>
          </div>
        </div>
      </div>
      <Text className="p-2 uppercase" size="md" variant="cardTitle">
        {name}
      </Text>
      <button className="bg-black rounded-ee-xl rounded-tl-xl px-5 py-1 text-center w-full hover:bg-blue-500 transition-all duration-500">
        <Text className="font-title " size="xs" variant="withIcon">
          Add to cart
          <IconShoppingCart />
        </Text>
      </button>
    </div>
  );
};

export default ProductCard;
