import { IconShoppingCart } from "@tabler/icons-react";
import Text from "components/ui/text.tsx";
import { Product } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

const ProductCard = (product: Product) => {
  const { name, product_images, price } = product;

  return (
    <div className="border border-gray-200 max-w-[315px] bg-white shadow-2xl rounded-2xl">
      <div className="relative rounded-t-2xl w-full overflow-hidden">
        <img
          className="h-64 w-full object-cover object-center"
          src={`${API_URL}/uploads/500_${product_images[0].name}`}
          alt={name}
        />
        <div className="absolute flex top-0 right-0 rounded-bl-2xl p-2 bg-black/60">
          <Text variant="header" size="md">
            {price}
          </Text>
          <div className="flex flex-col justify-start">
            <Text variant="header" size="sm">
              $
            </Text>
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
