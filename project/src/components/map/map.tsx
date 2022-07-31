import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {Marker} from 'leaflet';
import {Location, City, Offer} from '../../types/offer';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
// import { offers } from '../../mocks/offers';

type MapProps = {
  city: City;
  offers: Offer[];
};


export default function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if(map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        // marker.setIcon(
        //   selectedLocation !== undefined ? currentCustomIcon : defaultCustomIcon
        // ).addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map"
      ref = {mapRef}
    >
    </section>
  );
}
