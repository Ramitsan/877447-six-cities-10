import { CommentType } from '../../types/commentType';
import { humanizeReviewDate } from '../../utils';
import RaitingStars from '../raiting-stars/raiting-stars';

type ReviewProps = {
  comment: CommentType;
}

export default function Review({ comment }: ReviewProps): JSX.Element {
  const { user, rating, comment: commentText, date } = comment;
  const { avatarUrl, name } = user;
  const reviewDate = humanizeReviewDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <RaitingStars rating={rating} />
          </div>
        </div>
        <p className="reviews__text">{commentText}</p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewDate}</time>
      </div>
    </li>
  );
}

