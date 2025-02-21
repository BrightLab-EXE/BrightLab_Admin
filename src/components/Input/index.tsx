import clsx from "clsx";
import Image from "next/image";
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

const Input = ({
  type,
  value,
  setValue,
  className,
  placeholder,
  icon,
}: {
  type: HTMLInputTypeAttribute;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  placeholder: string;
  icon?: {
    url: string;
    pos: "FRONT" | "BACK";
  };
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        className={clsx(
          "py-[13px] px-3.5 rounded-lg shadow-lg bg-transparent border outline-0 text-sm w-full",
          icon && "flex gap-4" && icon.pos === "FRONT" ? "pl-10" : "pr-10",
          className
        )}
        placeholder={placeholder}
        onChange={(e) => setValue(e?.target?.value)}
      />
      {icon && (
        <div
          className={clsx(
            "absolute top-[calc(50%-9px)]",
            icon.pos === "FRONT" ? "left-3.5" : "right-3.5"
          )}
        >
          <Image src={icon.url} width={18} height={18} alt="input.icon" />
        </div>
      )}
    </div>
  );
};

export default Input;
