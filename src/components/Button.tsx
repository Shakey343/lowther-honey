import cn from "../utils/cn";
import { ReactNode } from "react";

const Button = ({
  className,
  children,
  onClick
}: {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={cn("transition-all border-4 w-fit px-[40px] py-[16px] bg-blue text-yellow border-yellow text-[20px] shadow font-semibold hover:bg-yellow hover:text-blue cursor-pointer text-nowrap", className)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button;
