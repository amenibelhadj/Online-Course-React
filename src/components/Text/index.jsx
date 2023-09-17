import React from "react";

const sizeClasses = {
  txtInterRegular16Gray700: "font-inter font-normal",
  txtInterSemiBold20Gray900: "font-inter font-semibold",
  txtInterMedium16Gray700: "font-inter font-medium",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterMedium16Gray70099: "font-inter font-medium",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold65: "font-bold font-inter",
  txtInterMedium14Deeporange40087: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterMedium14Gray700: "font-inter font-medium",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular16WhiteA700b2: "font-inter font-normal",
  txtInterSemiBold20Black900: "font-inter font-semibold",
  txtMetropolisBold45WhiteA700: "font-bold font-metropolis",
  txtInterMedium18: "font-inter font-medium",
  txtInterMedium16Red300: "font-inter font-medium",
  txtAirbnbCerealAppMedium1261: "font-airbnbcerealapp font-medium",
  txtInterSemiBold18Black90087: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtMetropolisBold45: "font-bold font-metropolis",
  txtInterSemiBold18Gray900: "font-inter font-semibold",
  txtInterSemiBold24Gray900: "font-inter font-semibold",
  txtMetropolisBold40: "font-bold font-metropolis",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold25Gray900: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold18Red300: "font-inter font-semibold",
  txtInterSemiBold30Gray900: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular16Gray900: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
