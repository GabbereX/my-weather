import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import generateId from '../utils/generateId';

interface IState {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  status: string;
}

const useGeoLocation = () => {
  const [localStorage, setLocalStorage] = useLocalStorage([], 'geoLocations');
  const [geoLocation, setGeoLocation] = useState<IState>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    status: '',
  });

  useEffect(() => {
    !localStorage.length &&
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const onSuccess = (geoLocation: GeolocationPosition) => {
    const coordinates = {
      lat: geoLocation.coords.latitude,
      lng: geoLocation.coords.longitude,
    };

    setGeoLocation({
      loaded: true,
      coordinates,
      status: 'ok',
    });

    setLocalStorage([{ id: generateId(), ...coordinates }]);
  };

  const onError = () => {
    setGeoLocation({
      loaded: true,
      status: 'error',
    });
  };

  // ! another way

  // useEffect(() => {
  //   axios('http://ip-api.com/json').then(res => {
  //     console.log(res)
  //   })
  // }, [])

  return [geoLocation];
};

export default useGeoLocation;
