import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { getToken } from './token';
import { processErrorHandle } from './process-error-handle';
import {StatusCodes} from 'http-status-codes';

//перечисление, в котором указываем в качестве ключей коды ошибок
//а в качестве значений - булевы значения
const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true
};

//вспомогательная функция, принимает ответ, который мы получили от сервера
//и возвращает в качестве результата проверку кода
//в статусе (response.status) будет код ответа
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

// const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
// const BACKEND_URL = 'http://localhost:3000';
const BACKEND_URL = 'https://sixcities.inikon.online';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  //проверяем необходимость отображения ошибки,
  // если есть ошибка, то вызываем processErrorHandle и передаем информацию об ошибке
  // в error находится текст ошибки
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }
      // прокидываем ошибку дальше, чтобы ее можно было поймать
      // и в определенном месте обработать
      throw error;
    }
  );

  return api;
};
