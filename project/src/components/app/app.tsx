import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CommentType } from '../../types/commentType';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFound from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks/index';
import Loading from '../../pages/loading/loading';
import {isCheckedAuth} from '../../const';

type AppScreenProps = {
  cities: string[];
}

export default function App({ cities }: AppScreenProps): JSX.Element {
  const {authorizationStatus, isDataLoaded, offers, city, comments } = useAppSelector((state) => state);
 
  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter>
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
          element={<RoomPage comments={comments} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
