import { useState } from 'react';
import Card from '../card/card';
import { OfferType } from '../../types/offerType';

type CardListProps = {
  offers: OfferType[];
  onOfferCardHover: (id: number | null) => void;
};

export default function CardList({ offers, onOfferCardHover}: CardListProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={() => {
            if(selected !== index) {
              setSelected(index);
              onOfferCardHover(offer.id);
            }
          }}
          onMouseLeave={() => {
            if(selected !== null) {
              setSelected(null);
              onOfferCardHover(null);
            }
          }}
        />
      ))}

    </div>
  );
}
