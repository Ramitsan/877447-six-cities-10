import { store } from '../store';
import { AuthorizationStatus } from '../const';

// ReturnType позволяет получить тип возвращаемого значения функции
// typeof определяет тип
// store.getState - это функция, которая возвращает объект состояния
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus
};
