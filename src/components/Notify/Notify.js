import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notify.css';

const Notify = (msg, type, customId = Math.random()) => {
  switch (type) {
    case 'success':
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: customId,
        autoClose: 3000,
      });
      break;

    default:
      toast.success(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default Notify;
