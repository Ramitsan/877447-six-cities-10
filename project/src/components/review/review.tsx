import { CommentType } from '../../types/commentType';
import RaitingStars from '../raiting-stars/raiting-stars';

type ReviewProps = {
  comment: CommentType;
}

export default function Review({ comment }: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <RaitingStars rating={comment.rating} />
        <p className="reviews__text">{comment.commentText}</p>
        <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
      </div>
    </li>
  );
}
