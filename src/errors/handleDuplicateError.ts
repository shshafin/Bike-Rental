import { TErrorSource } from "../interface/error.interface";

export const handleDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSource: TErrorSource = [
    {
      path: err?.path,
      message: `${extractedMessage} already exists`,
    },
  ];

  return { errorSource };
};
