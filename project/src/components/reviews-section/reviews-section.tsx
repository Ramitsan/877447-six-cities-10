import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/revuews-list';
import { CommentType } from '../../types/commentType';

type ReviewSectionProps = {
  comments: CommentType[];
}

export default function ReviewsSection({comments} : ReviewSectionProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments} />
      <ReviewForm />
    </section>
  );
}
