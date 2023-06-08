import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[70px]",
  h2: "font-bold sm:text-5xl md:text-5xl text-6xl",
  h3: "sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h5: "sm:text-4xl md:text-[38px] text-[40px]",
  h6: "font-bold sm:text-3xl md:text-[32px] text-[34px]",
  body1: "text-3xl sm:text-[26px] md:text-[28px]",
  body2: "text-2xl md:text-[22px] sm:text-xl",
  body3: "font-bold sm:text-5xl md:text-5xl text-[200px]",
  body4: "text-xl",
  body5: "text-lg",
  body6: "text-base",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
