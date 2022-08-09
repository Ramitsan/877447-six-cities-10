import { store } from '../store';

// ReturnType позволяет получить тип возвращаемого значения функции
// typeof определяет тип
// store.getState - это функция, которая возвращает объект состояния
export type State = ReturnType<typeof store.getState>;

// Передача действий с потоками данных происходит через вызов метода dispatch() в хранилище
// store.dispatch(addItem('Something'))
export type AppDispatch = typeof store.dispatch;
