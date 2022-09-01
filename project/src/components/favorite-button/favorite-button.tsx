import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, OFFER_FAVORITE_STATUS_FALSE, OFFER_FAVORITE_STATUS_TRUE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOfferAction } from '../../store/api-actions';
import { OfferType } from '../../types/offerType';
import { isFavorite } from '../../utils';

type FavoreteButtonProps = {
  offer: OfferType;
}

export default function FavoriteButton({ offer }: FavoreteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);

  const handleChangeFavorite = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOfferAction({ hotelId: offer.id, status: offer.isFavorite ? OFFER_FAVORITE_STATUS_FALSE : OFFER_FAVORITE_STATUS_TRUE }));
    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <button className={`place-card__bookmark-button button ${isFavorite(offer, 'place-card')}`}
      type="button"
      onClick={handleChangeFavorite}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
