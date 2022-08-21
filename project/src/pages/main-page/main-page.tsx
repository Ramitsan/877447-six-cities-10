import { useState } from 'react';
import { LocationType, OfferType } from '../../types/offerType';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import { DEFAULT_CITY_DATA } from '../../const';

type MainPageProps = {
  offers: OfferType[];
  cities: string[];
  city: string;
}

export default function MainPage({ offers, cities, city }: MainPageProps): JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | undefined>(undefined);

  const locationOffers = offers.filter((offer) => offer.city.name === city);

  const handleOfferCardHover = (hoveredOffer: number | null) => {
    if (hoveredOffer === null) {
      setSelectedLocation(undefined);
    } else {
      const currentOffer = offers.find((offer) => offer.id === hoveredOffer);
      setSelectedLocation(currentOffer?.location);
    }
  };

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{locationOffers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList
                offers={locationOffers}
                onOfferCardHover={handleOfferCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={offers[0] ? offers[0].city : DEFAULT_CITY_DATA}
                offers={offers}
                selectedLocation={selectedLocation}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
