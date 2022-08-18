import { store } from '../store';

// ReturnType позволяет получить тип возвращаемого значения функции
// typeof определяет тип
// store.getState - это функция, которая возвращает объект состояния
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
