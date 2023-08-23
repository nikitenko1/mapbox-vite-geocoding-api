import { useRef, useLayoutEffect, useEffect } from "react";
import { useFilterStore } from "./store/useFilterStore";
import { useMapStore } from "./store/useMapStore";
import { initMarkersByFilter } from "../utils/initMarkersByFilter";
import { createSearchRadiusLayer } from "../utils/createLayer";
import { initMap } from "../utils/initMap";
import { generateNewMarkers } from "../utils/generateNewMarkes";

export const useMapInit = () => {
  const { map, userLocation, markerUser, reload, setMap, setMarkers, setUserLocation, setRealod } =
    useMapStore();

  const { filter, radius } = useFilterStore();

  const mapDiv = useRef<HTMLDivElement>(null);

  const showMarkersOnRadius = async (
    location: [number, number],
    createUserMarkerAgain: boolean
  ) => {
    if (!map) return;
    const features = await initMarkersByFilter({
      filter,
      location,
      map,
      markerUser,
      radius,
      createUserMarkerAgain,
    });
    const markers = generateNewMarkers({ features, location, map });
    setMarkers(markers);
  };

  const createLayerForDrawRadius = () => {
    createSearchRadiusLayer(map!);
    showMarkersOnRadius(userLocation!, true);
  };

  const onDbClickOnMap = ({
    lngLat: { lat, lng },
  }: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    setUserLocation([lng, lat]);
    showMarkersOnRadius([lng, lat], true);
  };

  useLayoutEffect(() => {
    if (mapDiv.current && userLocation) {
      const mapInit = initMap({ container: mapDiv.current!, userLocation });
      mapInit && setMap(mapInit);
    }
  }, [mapDiv]);

  useEffect(() => {
    if (reload) {
      createLayerForDrawRadius();
      setRealod(false);
    }

    map && map.on("load", createLayerForDrawRadius);

    return () => {
      map?.off("load", createLayerForDrawRadius);
    };
  }, [map, reload]);

  useEffect(() => {
    map && map.on("dblclick", onDbClickOnMap);

    return () => {
      map?.off("dblclick", onDbClickOnMap);
    };
  }, [map, radius, filter]);

  useEffect(() => {
    if (userLocation && map) showMarkersOnRadius(userLocation, false);
  }, [radius, filter]);

  return mapDiv;
};
