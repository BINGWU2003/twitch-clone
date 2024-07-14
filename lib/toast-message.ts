import { toast } from "sonner";
export const toastMessage = (message: string, type: string = 'success') => {
  if (type === 'error') {
    toast.error(message);
  } else if (type === 'success') {
    toast.success(message);
  } else {
    toast(message);
  }
};