import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { classNames } from "utils/classNames.ts";

const titleVariants = cva("text-xl font-semibold flex items-center justify-center gap-2");

export interface TitleProps
  extends React.LabelHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof titleVariants> {}

const Title = React.forwardRef<HTMLParagraphElement, TitleProps>(({ className, ...props }, ref) => (
  <p ref={ref} className={classNames(titleVariants(), className)} {...props} />
));
export default Title;
