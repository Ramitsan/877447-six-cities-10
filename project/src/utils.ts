import { Offer } from './types/offer';

const isFavorite = (offer: Offer, placeCard: string) => offer.isFavorite ? `${placeCard}__bookmark-button--active` : '';

export {isFavorite};
