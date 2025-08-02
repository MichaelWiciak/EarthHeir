import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import "../styles/button.css";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const variantClass = `button-${variant}`;
  const sizeClass =
    size === "default" ? "button-default-size" : `button-${size}`;
  const finalClass = ["button", variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return <Comp data-slot="button" className={finalClass} {...props} />;
}

export { Button };
