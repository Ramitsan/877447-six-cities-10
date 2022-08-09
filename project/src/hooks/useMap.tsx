import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { CityType } from '../types/offerType';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityType): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRendered.current) {
      const {latitude, longitude, zoom} = city.location;

      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRendered.current = true;

      // return () => {
      //   instance.remove();
      // };
    }
  }, [mapRef, city]);

  return map;
}
