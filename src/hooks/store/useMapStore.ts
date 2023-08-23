import { shallow } from "zustand/shallow";
import { mapStore } from "../../store/mapStore";

export const useMapStore = () => {
  const props = mapStore(
    ({
      setMap,
      map,
      setMarkers,
      userLocation,
      setUserLocation,
      markerUser,
      reload,
      setRealod,
      backToMyLocation,
      isMapReady,
      markers,
    }) => ({
      setMap,
      map,
      setMarkers,
      userLocation,
      setUserLocation,
      markerUser,
      reload,
      setRealod,
      backToMyLocation,
      isMapReady,
      markers,
    }),
    shallow
  );

  return {
    ...props,
  };
};
