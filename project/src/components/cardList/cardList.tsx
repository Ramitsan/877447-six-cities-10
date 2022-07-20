import Card from '../../components/card/card';
import { Offer } from '../../types/offer';

type CardListProps = {
  cardCount: number;
  offers: Offer[];
};

export default function CardList({ cardCount, offers }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
        />
      ))}

    </div>
  );
}
