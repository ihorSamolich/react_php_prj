import Text from "components/ui/text.tsx";
import React from "react";
import { ProductWithDiscount } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";
import { calculateDaysRemaining } from "utils/calculateDaysRemaining.ts";

const DiscountCard: React.FC<ProductWithDiscount> = (props) => {
  const { name, product_images, discount_percentage, discount_end_date } = props;

  return (
    <div className="cursor-pointer">
      <div className="relative rounded-2xl w-full overflow-hidden">
        <img
          loading="lazy"
          className="h-64 w-full object-cover object-center"
          src={`${API_URL}/uploads/500_${product_images[0].name}`}
          alt={name}
        />
        <div className="absolute flex bottom-0 rounded-tr-2xl p-5 bg-orange-400">
          <Text variant="header" size="emd">
            {Math.floor(discount_percentage)}
          </Text>
          <div className="flex flex-col justify-center">
            <Text className="text-sm" variant="header">
              %
            </Text>
            <Text className="text-sm" variant="header">
              Off
            </Text>
          </div>
        </div>
      </div>
      <Text size="xs" variant="cardTitle">
        {name.toUpperCase()}
      </Text>
      <div className="bg-yellow-200 rounded-ee-xl rounded-tl-xl px-5 py-1 text-center">
        <Text className="text-orange-500" size="xs" variant="cardTitle">
          {calculateDaysRemaining(discount_end_date)} days Remaining
        </Text>
      </div>
    </div>
  );
};

export default DiscountCard;
