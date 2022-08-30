import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offerType';
import PremiumMark from '../../components/premium-mark/premium-mark';
import RaitingStars from '../raiting-stars/raiting-stars';
import FavoriteButton from '../favorite-button/favorite-button';

type FavoriteCardProps = {
  offer: OfferType;
}

export default function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <PremiumMark offer={offer} placeCard={'place-card'} />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} />
        </div>
        <RaitingStars rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
