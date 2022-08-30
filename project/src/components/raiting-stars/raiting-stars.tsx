type RaitingStarsProps = {
  rating: number
}

export default function RaitingStars({ rating }: RaitingStarsProps): JSX.Element {
  const maxRating = 5;
  const maxPercent = 100;
  const ratingInPercent = Math.round(rating) * maxPercent / maxRating;
  return (
    <>
      <span style={{ width: `${ratingInPercent}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </>
  );
}
