import { CommentType } from '../../types/commentType';
import Review from '../../components/review/review';

type ReviewListProps = {
  comments: CommentType[];
}

export default function ReviewsList({ comments }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}
