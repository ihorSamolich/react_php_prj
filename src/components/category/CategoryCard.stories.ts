import type { Meta } from "@storybook/react";
import CategoryCard from "components/category/CategoryCard.tsx";

const meta: Meta<typeof CategoryCard> = {
  component: CategoryCard,
};

export default meta;

export const Default = {
  args: {
    category: {
      id: 1,
      name: "Category 1",
      description: "Category 1 description",
      image: "1713359345.webp",
    },
    edit: () => {},
    remove: () => {},
  },
};
