import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewsSection from '../../components/reviews-section/reviews-section';
import { CommentType } from '../../types/commentType';
import ImagesGallery from '../../components/images-gallery/images-gallery';
import InsideList from '../../components/inside-list/inside-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFound from '../404-page/404-page';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { api } from '../../store';
import { fetchFavoriteOfferAction } from '../../store/api-actions';
import { OfferType } from '../../types/offerType';
import CardNearby from '../../components/card-nearby/card-nearby';
import RaitingStars from '../../components/raiting-stars/raiting-stars';
import { AppRoute, AuthorizationStatus } from '../../const';

export default function RoomPage(): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const offer = offers.find((item) => item.id === Number(id));
  const [offersNearby, setOffersNearby] = useState<OfferType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);

  // получаем комменты
  useEffect(() => {
    api.get(`/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  // получаем офферы неподалеку
  useEffect(() => {
    api.get(`/hotels/${id}/nearby`).then((response) => {
      setOffersNearby(response.data);
    });
  }, [id]);

  if (!offer) {
    return (
      <NotFound />
    );
  }

  const handleComment = (response: CommentType[]) => {
    setComments(response);
  };

  const handleChangeFavorite = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOfferAction({ hotelId: offer.id, status: offer.isFavorite ? 0 : 1 }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  const { bedrooms, description, goods, host, isPremium, maxAdults, price, rating, title, type, images } = offer;
  const { avatarUrl, isPro, name } = host;

  const userStatus = isPro ? 'Pro' : '';
  const isPremiumOffer = isPremium ? <div className="property__mark"><span>Premium</span></div> : null;
  const isFavoriteBtnClassName = offer.isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button';
  const isFavoriteSvgClassName = offer.isFavorite ? 'place-card__bookmark-icon' : 'property__bookmark-icon';

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImagesGallery images={images} type={type} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremiumOffer}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isFavoriteBtnClassName} type="button" onClick={handleChangeFavorite}>
                  <svg className={isFavoriteSvgClassName} width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RaitingStars rating={offer.rating}/>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <InsideList goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    {userStatus}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewsSection
                onComment={handleComment}
                comments={comments}
              />
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={offer.city}
              offers={[...offersNearby, offer]}
              selectedLocation={offer.location}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offerNearby) => (
                <CardNearby
                  key={offerNearby.id}
                  offerId={offerNearby.id}
                />
              )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
