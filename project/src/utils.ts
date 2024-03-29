import dayjs from 'dayjs';
import { SortType, MAX_COMMENTS_COUNT } from './const';
import { CommentType } from './types/commentType';
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

const sortCommentsByDate = (commentA: CommentType, commentB: CommentType) => {
  const dateOfCommentA = dayjs(commentA.date);
  const dateOfCommentB = dayjs(commentB.date);
  return dateOfCommentB.diff(dateOfCommentA);
};

const getComments = (comments: CommentType[]): CommentType[] => comments.sort(sortCommentsByDate).slice(0, MAX_COMMENTS_COUNT);

export { isFavorite, humanizeReviewDate, getSortOffers, getComments };
