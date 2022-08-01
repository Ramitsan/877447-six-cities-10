import Card from '../card/card';
import { OfferType } from '../../types/offerType';
import { useState } from 'react';

type CardListProps = {
  offers: OfferType[];
};

export default function CardList({ offers }: CardListProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={() => {
            if(selected !== index) {setSelected(index);}
          }}
          onMouseLeave={() => {
            setSelected(null);
          }}
        />
      ))}

    </div>
  );
}
