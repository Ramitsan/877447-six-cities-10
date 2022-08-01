import { Link } from 'react-router-dom';
import FavoriteCard from '../favorite-card/favorite-card';
import { OfferType } from '../../types/offerType';

type FavoriteCardListProps = {
  favoritesOffers: OfferType[];
};

export default function FavoriteCardList({ favoritesOffers }: FavoriteCardListProps): JSX.Element {
  const favoritesOffersCities = [...new Set(favoritesOffers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {favoritesOffersCities.map((city): JSX.Element => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesOffers
              .filter((offer) => city === offer.city.name)
              .map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      ))}
    </ul>
  );
}
