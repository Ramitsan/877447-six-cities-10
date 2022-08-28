import { useAppDispatch } from '../../hooks';
import { fetchFavoriteOfferAction } from '../../store/api-actions';
import { OfferType } from '../../types/offerType';
import { isFavorite } from '../../utils';

type FavoreteButtonProps = {
  offer: OfferType;
}

export default function FavoriteButton({offer} : FavoreteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(fetchFavoriteOfferAction({hotelId: offer.id, status: offer.isFavorite ? 0 : 1}));
  };
  return (
    <button className={`place-card__bookmark-button button ${isFavorite(offer, 'place-card')}`} type="button" onClick={handleOnClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
