import React from "react";

const sizes = {
  s: "text-2xl font-semibold leading-[30px]",
  md: "text-[28px] font-semibold leading-[34px]",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
