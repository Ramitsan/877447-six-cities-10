import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/revuews-list';
import { CommentType } from '../../types/commentType';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getComments } from '../../utils';

type ReviewSectionProps = {
  comments: CommentType[];
  onComment: (response: any) => void
}

export default function ReviewsSection({ comments, onComment }: ReviewSectionProps): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{getComments(comments).length}</span>
      </h2>
      <ReviewsList comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm onComment={onComment} /> : ''}
    </section>
  );
}
