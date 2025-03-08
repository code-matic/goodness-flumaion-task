import { DatePicker } from "antd";
import { cn } from "../../lib";
import type { Dayjs } from "dayjs";

interface IProps {
  label?: string;
  placeholder?: [string, string];
  value?: string | number | [Dayjs, Dayjs] | undefined[];
  type?: string;
  name?: string;
  className?: string;
  onChange?: any;
  labelClassName?: string;
  visibilityToggle?: boolean;
  showTime?: object | boolean;
  defaultValue?: [Dayjs, Dayjs] | undefined;
  popClassName?: string;
  open?: boolean;
}

const { RangePicker } = DatePicker;

const DateRange = (props: IProps) => {
  const { label, placeholder, name, onChange, labelClassName, showTime, defaultValue, popClassName, open } =
    props;

  return (
    <div className="w-full">
      <div className="mb-[6px]">
        <label
          className={cn(
            " capitalize font-inter !text-sm font-medium text-gray-700",
            labelClassName
          )}
          htmlFor={name}
        >
          {label}{" "}
        </label>
      </div>

      <RangePicker
        className={`flex !w-full flex-1 !h-11 items-center !rounded-lg border border-gray-300
           !px-[14px] !py-[10px] !text-sm   hover:!border-primary focus:!border-primary !bg-white !text-gray-700 placeholder:!text-gray-500`}
        placeholder={placeholder}
        onChange={onChange}
        separator={
          <p className="!text-sm  !text-gray-700">
            –
          </p>
        }
        // placement="bottomRight"
        showTime={showTime}
        open={open}
        defaultValue={defaultValue}
        format={showTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"}
        id={name}
        popupClassName={popClassName ?? "filter-date-range"} 
      />
    </div>
  );
};

export default DateRange;
