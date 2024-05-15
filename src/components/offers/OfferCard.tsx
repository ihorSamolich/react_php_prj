import { IconRosetteDiscount } from "@tabler/icons-react";
import { Button } from "components/ui/Button/button.tsx";
import Text from "components/ui/text.tsx";
import { Link } from "react-router-dom";
import { SpecialOffer } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

const OfferCard = (props: SpecialOffer) => {
  const { image, description, product_id } = props;

  return (
    <div className="relative h-full overflow-hidden">
      <img
        loading="lazy"
        src={`${API_URL}/uploads/1200_${image}`}
        alt={description}
        className="h-full w-full object-cover object-center"
      />

      <div className="absolute bottom-0 left-0 right-0   ">
        <Text variant="cardTitle" size="md" className="text-red-600 bg-yellow-500/80 p-5">
          {description}
        </Text>
      </div>
      <Link to={`/product/${product_id}`}>
        <Button className="absolute bottom-1/3 right-2" variant="yellow">
          <IconRosetteDiscount />
          Read more...
        </Button>
      </Link>

      <img className="absolute top-0 right-0 w-40" src="/special_offer.png" alt="special offer" />
    </div>
  );
};

export default OfferCard;
