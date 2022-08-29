import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offerType';
import PremiumMark from '../../components/premium-mark/premium-mark';
import RaitingStars from '../raiting-stars/raiting-stars';
import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = {
  offer: OfferType;
  onMouseOver?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

export default function Card({ offer, onMouseOver, onMouseLeave }: CardProps): JSX.Element {
  return (
    <article onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="cities__card place-card">
      <PremiumMark offer={offer} placeCard={'place-card'} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RaitingStars rating={offer.rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}
