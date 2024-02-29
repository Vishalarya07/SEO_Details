import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-sm font-medium",
  s: "text-xs font-normal",
  "2xl": "text-xl font-medium leading-[25px]",
  xl: "text-base font-normal leading-5",
  md: "text-[13px] font-medium",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_03 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
