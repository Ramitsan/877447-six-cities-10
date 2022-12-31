import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFound from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Loading from '../../pages/loading/loading';
import { isCheckedAuth } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors.user-process';
import { getLoadedDataStatus, getOffers } from '../../store/data-process/selectors.data-process';
import { checkAuthAction, fetchFavoriteOffersListAction, fetchOffersAction } from '../../store/api-actions';
import { useEffect } from 'react';

type AppScreenProps = {
  cities: string[];
}

export default function App({ cities }: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offers = useAppSelector(getOffers);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const city = useAppSelector((state) => state.CITY.city);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //диспатчим действие для получения офферов
    dispatch(fetchOffersAction());

    // checkAuthAction - действие для проверки наличия авторизации
    dispatch(checkAuthAction());
  }, []);

  useEffect(() => {
    if(isCheckedAuth(authorizationStatus)) {
      // диспатчим действие для получения списка избранного
      dispatch(fetchFavoriteOffersListAction());
    }
  }, [authorizationStatus]);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              city={city}
              offers={offers}
              cities={cities}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage
                offers={offers}
              />
            </ PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HashRouter>
  );
}
