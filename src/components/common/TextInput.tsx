import { Input } from "antd";
import { type ChangeEventHandler, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../lib";


interface IProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  name?: string;
  prefix?: ReactNode;
  defaultValue?: string | number;
  disabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelClassName?: string;
}

const TextInput = (props: IProps) => {
  const {
    label,
    placeholder,
    value,
    name,
    prefix,
    onChange,
    defaultValue,
    disabled,
    className,
    labelClassName,
  } = props;
  return (
    <div className="w-full ">
      {label && (
         <div className="mb-[6px]">
        <label
          className={cn(
            " capitalize !text-sm font-medium text-gray-700",
            labelClassName
          )}
          htmlFor={name}
        >
          {label}
        </label>
        </div>
      )}
        <Input
          placeholder={placeholder}
          value={value}
          id={name}
          name={name}
          prefix={prefix}
          disabled={disabled}
          defaultValue={defaultValue}
          className={twMerge(
            `flex h-11 w-full flex-1  shadow-xs items-center !rounded-lg border border-gray-300 !text-sm sm:!text-base  !px-[14px] !py-[10px] !font-normal  ${className} !bg-white !text-gray-700 hover:!border-gray-300"
              placeholder:!text-[#00000040]`
          )}
          onChange={onChange}
        />
 
    </div>
  );
};

export default TextInput;
