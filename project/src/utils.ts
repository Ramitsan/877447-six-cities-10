import { OfferType } from './types/offerType';

const isFavorite = (offer: OfferType, placeCard: string) => offer.isFavorite ? `${placeCard}__bookmark-button--active` : '';

export {isFavorite};
