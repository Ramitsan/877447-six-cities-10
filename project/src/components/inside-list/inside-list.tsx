import { useParams } from 'react-router-dom';
import { offers } from '../../mocks/offers';

type InsideItemProps = {
  good: string;
}

function InsideItem({ good }: InsideItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

export default function InsideList(): JSX.Element {
  const { id } = useParams();
  const offer = offers.filter((item) => item.id === Number(id))[0];
  const { goods } = offer;
  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <InsideItem key={good} good={good} />
      ))}
    </ul>
  );
}
