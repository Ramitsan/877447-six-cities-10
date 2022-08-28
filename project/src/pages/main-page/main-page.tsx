import { useCallback, useState } from 'react';
import { LocationType, OfferType } from '../../types/offerType';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import { DEFAULT_CITY_DATA, SortType } from '../../const';
import { CITIES_DATA } from '../../const';
import SortForm from '../../components/sort-form/sort-form';
import { getSortOffers } from '../../utils';

type MainPageProps = {
  offers: OfferType[];
  cities: string[];
  city: string;
}

export default function MainPage({ offers, cities, city }: MainPageProps): JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | undefined>(undefined);
  const [activeSortType, setActiveSortType] = useState(SortType.Popular);

  const locationOffers = offers.filter((offer) => offer.city.name === city);
  const cityLocation = CITIES_DATA.find((item) => item.name === city);

  const sortedOffers = getSortOffers(activeSortType, locationOffers);

  const handleOfferCardHover = (hoveredOffer: number | null) => {
    if (hoveredOffer === null) {
      setSelectedLocation(undefined);
    } else {
      const currentOffer = offers.find((offer) => offer.id === hoveredOffer);
      setSelectedLocation(currentOffer?.location);
    }
  };

  const handleChangeSortType = useCallback((type: string) => {
    setActiveSortType(type);
  }, []);

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
              <b className="places__found">{locationOffers.length} places to stay in {city}</b>
              <SortForm
                activeSortType={activeSortType}
                onChangeSortType={handleChangeSortType}
              />
              <CardList
                offers={sortedOffers}
                onOfferCardHover={handleOfferCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={cityLocation ? cityLocation : DEFAULT_CITY_DATA}
                offers={locationOffers}
                selectedLocation={selectedLocation}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
