import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "muted"
    | "white"
    | "black"
    | "green"
    | string;
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  font?: "default" | "raleway" | "mono" | "wallpoet";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const colorClasses = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-muted-foreground",
  white: "text-white",
  black: "text-black",
  green: "text-blockchain-green",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const fontClasses = {
  default: "",
  raleway: "font-raleway",
  mono: "font-mono",
  wallpoet: "font-wallpoet",
};

export function Text({
  children,
  variant = "p",
  size = "base",
  weight = "normal",
  color = "default",
  align = "left",
  font = "default",
  className,
  ...props
}: TextProps) {
  const Component = variant;

  const classes = cn(
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color as keyof typeof colorClasses] ?? color,
    alignClasses[align],
    fontClasses[font],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
