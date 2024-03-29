import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Marker } from 'leaflet';
import { LocationType, CityType, OfferType } from '../../types/offerType';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  selectedLocation: LocationType | undefined;
};

export default function Map({ city, offers, selectedLocation }: MapProps): JSX.Element {
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
    let markers : Marker[] = [];
    if (map) {
      markers = offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          selectedLocation !== undefined &&
            offer.location.latitude === selectedLocation?.latitude &&
            offer.location.longitude === selectedLocation?.longitude
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(map);
        return marker;
      });
    }
    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [map, offers, selectedLocation]);

  useEffect(() => {
    map?.flyTo({
      lat: city.location.latitude,
      lng: city.location.longitude
    },
    city.location.zoom);
  }, [city, map]);

  return (
    <section className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </section>
  );
}
