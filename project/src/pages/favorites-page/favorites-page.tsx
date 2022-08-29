import { Link } from 'react-router-dom';
import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';
import { OfferType } from '../../types/offerType';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import FavoriteEmptyPage from '../favorite-empty-page/favorite-empty-page';

type FavoritesPageProps = {
  offers: OfferType[];
};

export default function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  return (
    favoriteOffers.length === 0 ? <FavoriteEmptyPage /> :

      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteCardList favoritesOffers={favoriteOffers} />
            </section>
          </div>
        </main>

        <footer className="footer container">
          <Link className="footer__logo-link" to="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
  );
}
