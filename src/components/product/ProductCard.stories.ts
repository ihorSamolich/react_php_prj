import { Meta } from "@storybook/react";

import ProductCard from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
};

export default meta;

export const Default = {
  args: {
    id: 1,
    name: "Sample Product",
    image: "1713426678.webp",
    price: 90.99,
  },
};
