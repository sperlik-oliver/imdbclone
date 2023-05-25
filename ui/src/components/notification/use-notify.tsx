import { toast } from 'react-toastify';

const DEFAULT_AUTO_CLOSE_TIME = 5000;

type Notify = (
  content: string,
  type?: 'error' | 'info' | 'success' | 'warning',
  autoCloseTime?: number,
) => void;

const useNotify =
  (): Notify =>
  (content: string, type = 'success', autoCloseTime?: number) => toast(content, { type, closeOnClick: true, autoClose: autoCloseTime || DEFAULT_AUTO_CLOSE_TIME });
  

export default useNotify;
