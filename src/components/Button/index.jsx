import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded",
};
const variants = {
  gradient: {
    blue_A400_indigo_A700: "bg-gradient text-white-A700",
  },
  fill: {
    blue_gray_400_01: "bg-blue_gray-400_01 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    indigo_400: "bg-indigo-400",
    blue_gray_50: "bg-blue_gray-50 text-teal-500",
  },
};
const sizes = {
  lg: "h-12 px-6 text-base",
  xs: "h-6 px-1",
  md: "h-10 px-6 text-base",
  sm: "h-7 px-2.5 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "blue_gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["lg", "xs", "md", "sm"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["blue_A400_indigo_A700", "blue_gray_400_01", "white_A700", "indigo_400", "blue_gray_50"]),
};

export { Button };
