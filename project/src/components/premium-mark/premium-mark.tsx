import { Offer } from '../../types/offer';

interface IPremiumMarkProps {
  offer: Offer,
  placeCard: string
}

export default function PremiumMark({ offer, placeCard }: IPremiumMarkProps): JSX.Element | null {
  return (
    offer.isPremium ? <div className={`${placeCard}__mark`}><span>Premium</span></div> : null
  );
}
