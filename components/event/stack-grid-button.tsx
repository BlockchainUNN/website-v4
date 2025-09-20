import { ArrowRight } from "lucide-react";
import React, { ReactNode, CSSProperties, MouseEvent } from "react";

type Variant = "button" | "badge" | "social" | "icon" | "navigation";
type Shape = "rounded" | "circular" | "pill";
type Size = "small" | "medium" | "large";

interface StackGridButtonProps {
  // Content
  text?: string;
  icon?: ReactNode;

  // Style properties
  variant?: Variant;
  shape?: Shape;
  size?: Size;

  // Colors
  bgColor?: string;
  textColor?: string;
  shadowColor?: string;
  borderColor?: string;

  // Arrow specific
  hasArrow?: boolean;
  arrowBgColor?: string;
  arrowTextColor?: string;
  arrowIcon?: ReactNode;

  // Shadow/offset
  shadowOffset?: { x: number; y: number };
  shadowBlur?: number;

  // Behavior
  clickable?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  // Custom styles
  customClass?: string;
  width?: string | number;
  height?: string | number;
}

export default function StackGridButton({
  // Content
  text = "",
  icon = null,

  // Style properties
  variant = "button",
  shape = "rounded",
  size = "medium",

  // Colors
  bgColor = "#4CAF50",
  textColor = "#FFFFFF",
  shadowColor = "#2E7D32",
  borderColor = "#2E7D32",

  // Arrow specific
  hasArrow = false,
  arrowBgColor = "#FFFFFF",
  arrowTextColor = "#000000",
  arrowIcon = <ArrowRight />,

  // Shadow/offset
  shadowOffset = { x: -2, y: 2 },
  shadowBlur = 0,

  // Behavior
  clickable = true,
  onClick = () => {},

  // Custom styles
  customClass = "",
  width = "auto",
  height = "auto",
}: StackGridButtonProps) {
  // Shape classes
  const getShapeClass = (): string => {
    switch (shape) {
      case "circular":
        return "rounded-full";
      case "pill":
        return hasArrow ? "rounded-l-full" : "rounded-full";
      case "rounded":
        return hasArrow ? "rounded-l-lg" : "rounded-lg";
      default:
        return hasArrow ? "rounded-l-lg" : "rounded-lg";
    }
  };

  // Size classes
  const getSizeClass = (): string => {
    switch (size) {
      case "small":
        return shape === "circular" || variant === "icon"
          ? "w-10 h-10 text-sm"
          : "px-4 py-2 text-sm";
      case "large":
        return shape === "circular" || variant === "icon"
          ? "w-16 h-16 text-xl"
          : "px-8 py-4 text-xl";
      default: // medium
        return shape === "circular" || variant === "icon"
          ? "w-12 h-12 text-base"
          : "px-6 py-3 text-base";
    }
  };

  // Variant-specific classes
  const getVariantClass = (): string => {
    switch (variant) {
      case "social":
      case "icon":
        return "flex items-center justify-center";
      case "navigation":
        return "flex items-center justify-center";
      case "badge":
        return "inline-flex items-center justify-center cursor-default";
      default:
        return "flex items-center justify-center";
    }
  };

  // Dynamic styles for main button
  const buttonStyle: CSSProperties = {
    background: bgColor,
    color: textColor,
    borderColor: borderColor,
    boxShadow: `${shadowOffset.x}px ${shadowOffset.y}px ${shadowBlur}px ${shadowColor}`,
    width: width !== "auto" ? width : undefined,
    height: height !== "auto" ? height : undefined,
  };

  const baseClasses: string = `
    ${getShapeClass()}
    ${getSizeClass()}
    ${getVariantClass()}
    border-2
    font-medium
    transition-all
    duration-200
    transform
    relative
    ${
      clickable
        ? "hover:scale-103 active:scale-97 cursor-pointer"
        : "cursor-default"
    }
    ${customClass}
  `
    .trim()
    .replace(/\s+/g, " ");

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (clickable && onClick) {
      onClick(e);
    }
  };

  if (hasArrow) {
    return (
      <button
        className={`${baseClasses} grid grid-cols-6 !p-0 overflow-hidden rounded-md !w-full`}
        style={buttonStyle}
        onClick={handleClick}
        disabled={!clickable}
      >
        <span className="col-span-5 px-6 py-3">
          {icon && (
            <span className="flex items-center justify-center">{icon}</span>
          )}
          {text && !icon && <span>{text}</span>}
          {text && icon && (
            <>
              <span className="mr-2">{icon}</span>
              <span>{text}</span>
            </>
          )}
        </span>
        <span
          className="flex items-center justify-center p-2 col-span-1  h-full"
          style={{
            backgroundColor: arrowBgColor,
            color: arrowTextColor,
          }}
        >
          {arrowIcon}
        </span>
      </button>
    );
  }

  return (
    <button
      className={baseClasses}
      style={buttonStyle}
      onClick={handleClick}
      disabled={!clickable}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {text && !icon && <span>{text}</span>}
      {text && icon && (
        <>
          <span className="mr-2">{icon}</span>
          <span>{text}</span>
        </>
      )}
    </button>
  );
}
