import { CommentType } from '../../types/commentType';
import Review from '../../components/review/review';
import { getComments } from '../../utils';

type ReviewListProps = {
  comments: CommentType[];
}

export default function ReviewsList({ comments }: ReviewListProps): JSX.Element {
  //отрисовываем последние 10 комментариев
  const lastСomments = getComments(comments);
  return (
    <ul className="reviews__list">
      {lastСomments.map((comment) => (
        <Review
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}
