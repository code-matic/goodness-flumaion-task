"use client";

import React, { createContext, useContext, useMemo } from "react";
import { message } from "antd";
import type { ArgsProps } from "antd/es/message";

export interface MessageProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export type MessageProviderValues = {
  successMessage: (props: ArgsProps) => void;
  errorMessage: (props: ArgsProps) => void;
  warningMessage: (props: ArgsProps) => void;
};

export const MessageProviderContext = createContext<MessageProviderValues>({
  successMessage: () => {},
  errorMessage: () => {},
  warningMessage: () => {},
});

export const useMessage = () => {
  if (!MessageProviderContext) {
    throw new Error(
      "useMessage can not be used outside of a Message Provider context"
    );
  }
  return useContext(MessageProviderContext);
};

export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const value = useMemo(() => {
    const successMessage = ({ type = "success", ...props }: ArgsProps) => {
      messageApi.open({
        type,
        style: {
          fontSize: "16px",
          color: "#101828",
          fontWeight: 500,
        },
        ...props,
      });
    };

    const errorMessage = ({ type = "error", ...props }: ArgsProps) => {
      messageApi.open({
        type,
        style: {
          fontSize: "16px",
          color: "#101828",
          fontWeight: 500,
        },
        ...props,
      });
    };

    const warningMessage = ({ type = "warning", ...props }: ArgsProps) => {
      messageApi.open({
        type,
        style: {
          fontSize: "16px",
          color: "#101828",
          fontWeight: 500,
        },
        ...props,
      });
    };

    return { successMessage, errorMessage, warningMessage };
  }, [messageApi]);

  return (
    <MessageProviderContext.Provider value={value}>
      {contextHolder}
      {children}
    </MessageProviderContext.Provider>
  );
};
