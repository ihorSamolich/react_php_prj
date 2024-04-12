import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { classNames } from "utils/classNames.ts";

const inputVariants = cva("flex text-md  disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default: "border px-3 py-1 rounded-sm",
      search: "border rounded-md px-3 py-2", //+++
      file: "sr-only",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input type={type} className={classNames(inputVariants({ variant, className }))} ref={ref} {...props} />
    );
  },
);
