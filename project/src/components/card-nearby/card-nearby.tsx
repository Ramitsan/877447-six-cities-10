import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offerType';
import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import RaitingStars from '../raiting-stars/raiting-stars';

type CardNearbyProps = {
  offer: OfferType;
}

export default function CardNearby({ offer }: CardNearbyProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <PremiumMark offer={offer} placeCard={'place-card'} />
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {/* <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button> */}
          <FavoriteButton offer={offer} />
        </div>
        <RaitingStars rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to='#'>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
