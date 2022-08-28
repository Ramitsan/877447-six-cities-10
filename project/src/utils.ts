import dayjs from 'dayjs';
import { SortType } from './const';
import { OfferType } from './types/offerType';

const isFavorite = (offer: OfferType, placeCard: string) => offer.isFavorite ? `${placeCard}__bookmark-button--active` : '';

const humanizeReviewDate = (date: string) => dayjs(date).format('MMMM YYYY');

const getSortOffers = (type: string, offers: OfferType[]) => {
  switch (type) {
    case SortType.PriceLowToHigh:
      return offers.sort((offerA: OfferType, offerB: OfferType) => offerA.price - offerB.price);
    case SortType.PriceHighToLow:
      return offers.sort((offerA: OfferType, offerB: OfferType) => offerB.price - offerA.price);
    case SortType.TopRatedFirst:
      return offers.sort((offerA: OfferType, offerB: OfferType) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

export { isFavorite, humanizeReviewDate, getSortOffers };
