import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity } from '../../store/actions';
import LocationItem from '../location-item/location-item';

type LocationListProps = {
  cities: string[];
}

export default function LocationList({ cities }: LocationListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleSelectCity = (name: string) => {
    dispatch(changeCity({ city: name }));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationItem
          key={city}
          city={city}
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
        />
      ))}
    </ul>
  );
}
