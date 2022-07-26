type RaitingStarsProps = {
    rating: number
}

export default function RaitingStars({rating}: RaitingStarsProps) : JSX.Element {
  const maxRating = 5;
  const maxPercent = 100;
  const ratingInPercent = Math.round(rating) * maxPercent / maxRating;
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${ratingInPercent}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
