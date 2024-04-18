import type { Meta } from "@storybook/react";
import { Button } from "components/ui/Button/button.tsx";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    size: "default",
    children: "Button",
  },
};

export const Icon = {
  args: {
    variant: "icon",
    size: "icon",
    children: "+",
  },
};
