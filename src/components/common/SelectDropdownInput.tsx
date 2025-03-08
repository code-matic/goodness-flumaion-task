import { Select } from "antd";
import { cn } from "../../lib";

export interface OptionsInterface {
  name: string;
  value: string;
}

interface IProps {
  label?: string;
  placeHolder?: string;
  options: OptionsInterface[];
  onChange?: (value: string) => void;
  value?: string;
  name?: string;
  defaultValue?: string;
  allowClear?: boolean;
  labelClassName?: string;
  className?: string;
}

export const SelectInput = (props: IProps) => {
  const {
    label,
    labelClassName,
    options,
    onChange,
    placeHolder,
    value,
    name,
    allowClear,
    className,
  } = props;
  const { Option } = Select;
  return (
    <div className="select-input">
      {label && (
        <div className="mb-[6px]">

       
        <label
          className={cn(
            "  font-inter !text-sm font-medium text-gray-700",
            labelClassName
          )}
          htmlFor={name}
        >
          {label}{" "}
        </label>
        </div>
      )}
      <Select
        className={`flex !w-full flex-1 !h-11 items-center !rounded-lg border border-gray-300
           !px-[14px] !py-[10px] !text-sm !font-normal !font-inter hover:!border-primary focus:!border-primary !bg-white !text-gray-700 placeholder:!text-gray-500 ${className}`}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        id={name}
        allowClear={allowClear}
      >
        {options.map((opt) => {
          return (
            <Option key={opt.name} value={opt.value}>
              {opt.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
