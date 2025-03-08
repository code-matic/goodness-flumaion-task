import { type ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  name?: string;
  ref?: React.RefObject<HTMLTextAreaElement>;
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
const TextAreaInput = (props: IProps) => {
  const {
    label,
    placeholder,
    value,
    name,
    onChange,
    className,
    ref,
  } = props;
  return (
    <div className="w-full ">
      {label && (
         <div className="mb-[6px]">
        <label
          className=
            "capitalize !text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}{" "}
        </label>
        </div>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        id={name}
        name={name}
        ref={ref}
        className={twMerge(
          `flex h-[8.38rem] w-full flex-1 font-inter resize-none shadow-xs items-center !rounded-lg border border-gray-300 focus:!border-gray-300 outline-0 focus-visible:!border-gray-300 !text-sm sm:!text-base  !px-[14px] !py-[10px] !font-normal hover:!border-gray-300 ${className} !bg-white !text-gray-700 placeholder:!text-[#00000040]`
        )}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaInput;
