import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { classNames } from "utils/classNames.ts";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      default: "",
      blockTitle: "text-center uppercase font-title font-bold py-5",
      cardTitle: "text-black text-center font-title truncate font-bold",
      description: "text-grey font-bold",
      header: "text-white font-extrabold",
      withIcon: "flex items-center justify-center gap-2 text-white font-extrabold ",
    },
    size: {
      default: "w-full",
      xs: "text-lg",
      sm: "text-xl",
      md: "text-3xl",
      emd: "text-4xl",
      lg: "text-6xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TextProps
  extends React.LabelHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, ...props }, ref) => (
    <p ref={ref} className={classNames(textVariants({ variant, size, className }))} {...props} />
  ),
);
export default Text;
