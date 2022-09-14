// import {store} from '../store';
// import {setError} from '../store/error/error-process';
// import {clearErrorAction} from '../store/api-actions';

// Так как взаимодействуем с сервером мы через модуль `api.ts`,
// то необходимо как то из модуля `api.ts` вызвать действия по обновлению
// поля `error`.
// Для этого создадим модуль `process-error-handle.ts`
// и в нем уже вызовем все необходимые действия.
// Эту функцию processErrorHandle мы будем вызывать из api, т.е. axios
export const processErrorHandle = (message: string): void => {
  // store.dispatch(setError(message));
  // store.dispatch(clearErrorAction());
};
