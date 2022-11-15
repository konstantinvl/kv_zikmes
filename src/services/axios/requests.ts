import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

export const newOrder = async (number: string) => {
  const responce = await axiosInstance
    .post(`neworder`, { number })
    .then((response: AxiosResponse) => response);
  return responce;
};
