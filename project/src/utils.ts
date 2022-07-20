import { Offer } from './types/offer';

const isPremium = (offer: Offer, placeCard: string) => offer.isPremium ? `<div className="${placeCard}__mark"><span>Premium</span></div>` : '';
const isFavorite = (offer: Offer, placeCard: string) => offer.isFavorite ? `${placeCard}__bookmark-button--active` : '';

export {isPremium, isFavorite};
