import { useState } from "react";
import { toast, ToastOptions } from "react-toastify";

type ToastData = {
  message: string;
  success: boolean;
};

const useToast = () => {
  const [toastData, setToastData] = useState<ToastData | null>(null);

  const showToast = (message: string, success: boolean) => {
    setToastData({ message, success });
  };

  if (toastData) {
    const { message, success } = toastData;
    const options: ToastOptions = {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      closeButton: false,
    };

    if (success) {
      toast.success(message, options);
    } else {
      toast.error(message, options);
    }

    setToastData(null);
  }

  return showToast;
};

export default useToast;
