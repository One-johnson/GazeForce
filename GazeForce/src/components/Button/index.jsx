import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  icbCircleBorder30: "rounded-[30px]",
};
const variants = {
  FillYellowA400: "bg-yellow_A400 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
  icbOutlineGray4007f: "bg-black_900 border border-gray_400_7f border-solid",
};
const sizes = { sm: "p-[17px]", smIcn: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf(["RoundedBorder10", "icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "FillYellowA400",
    "FillBlack900",
    "icbOutlineGray4007f",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
