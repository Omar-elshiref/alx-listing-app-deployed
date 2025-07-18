import React from "react";
import { ButtonProps } from "@/interfaces/index";
import Image from "next/image";

export const Button = ({ text, className, icon, classNameIcon, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="Icon" width={15} height={15} className={`w-5 h-5 ${classNameIcon}`} />} {text}
    </button>
  );
};
export default Button;