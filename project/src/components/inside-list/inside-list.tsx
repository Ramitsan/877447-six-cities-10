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

type InsideListProps = {
  goods: string[];
}

export default function InsideList({goods} : InsideListProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <InsideItem key={good} good={good} />
      ))}
    </ul>
  );
}
