import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import LocationList from '../location-list/location-list';

type MainEmptyProps = {
  cities: string[];
}

export default function MainEmpty({ cities }: MainEmptyProps): JSX.Element {
  const error = useAppSelector((store) => store.error);
  const lastError = useMemo(() => error, []);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList cities={cities} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              {lastError === null ? (
                <>
                  <b className="cities__status">
                    No places to stay available
                  </b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </>) : <b className="cities__status">Sorry, server unavailable. Please try again later</b>}
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}
