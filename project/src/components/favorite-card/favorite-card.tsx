import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offerType';
import {isFavorite} from '../../utils';
import PremiumMark from '../../components/premium-mark/premium-mark';
import RaitingStars from '../raiting-stars/raiting-stars';

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
          <button className={`place-card__bookmark-button ${isFavorite(offer, 'place-card')} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
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
