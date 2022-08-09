
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../types/stateType';

// Файл для типизации хуков

// useDispatch - хук, возвращающий dispatch метод из редакса, с помощью которого можно диспатчить экшены(отправлять).
// useSelector - хук, принимающий на вход селектор - метод, который принимает redux state и возвращает из него необходимые данные.
// TypedUseSelectorHook - это просто переопределение машинописного текста. Наш useTypedSelector равен useSelector.

// модификация оригинального useSelector'а под наше хранилище
// теперь, когда нам нужно будет что-то отправить в стор, диспатчнуть или извлечь из него,
// мы будем использовать обертки useAppDispatch и useAppSelector, а не useDispatch и useSelector.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
