import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instanceClientAPI from './api';

export const sendData = async ({ id, day, time, kind_trainee }) => {
  try {
    const res = await instanceClientAPI.post(`/api`, {id, day, time, kind_trainee});
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};


export const getData = async ({id}) => {
  try {
    const result = await instanceClientAPI.put(`/api`, { id });
    console.log(result);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALL = async () => {
  try {
    const result = await instanceClientAPI.get(`/api`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const clientAPI = {
  sendData,
  getData,
  getDataALL
};
