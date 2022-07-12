import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';

type AppScreenProps = {
  cardCount: number;
}

function App({ cardCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage cardCount={cardCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
      <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
