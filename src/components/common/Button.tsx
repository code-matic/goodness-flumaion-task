
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { cva, type VariantProps } from "class-variance-authority";

import { type ReactNode } from "react";
import { cn } from "../../lib";
import { Link } from "react-router-dom";

export type ButtonProps = {
  href?: string;
  title?: string;
  className?: string;
  [x: string]: unknown;
  isLoading?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

const buttonStyles = cva(
  "flex shadow-xs items-center hover:opacity-80 transition duration-500 ease-in-out h-12 text-base justify-center rounded-[10px]  w-full disabled:bg-gray-600 disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary: "bg-[#ED7845] border border-[#ED7845] text-white",
        secondary: "bg-white border border-[#ED7845] text-[#ED7845]",
      },
      centered: {
        true: "mx-auto",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

const Button = ({
  href,
  title,
  className,
  intent,
  centered,
  icon,
  isLoading,
  type,
  ...props
}: Props) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: `${intent === "secondary" ? "#ED7845" : "white"}`,
      }}
      spin
    />
  );
  return href ? (
    <Link
      to={href}
      className={cn(`${buttonStyles({ intent, centered })}  ${className!}`)}
      {...props}
    >
      {title}
      {icon ? icon : null}
    </Link>
  ) : (
    <>
      {isLoading ? (
        <button
          disabled={isLoading}
          className={cn(
            `${buttonStyles({
              intent,
              centered,
            })} ${className!} cursor-not-allowed border-none`
          )}
          {...props}
        >
          <Spin indicator={antIcon} />
        </button>
      ) : (
        <button
          type={type || "button"}
          className={cn(`${buttonStyles({ intent, centered })}  ${className!}`)}
          {...props}
        >
          {title}
          {icon ? icon : null}
        </button>
      )}
    </>
  );
};

export default Button;
