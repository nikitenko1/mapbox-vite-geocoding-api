import { Map, Marker } from "mapbox-gl";
import { FilterOpts } from "../interfaces/filter";
import { Feature } from "../interfaces/map";
import { deletePolylineOfMap } from "./deletePolylineOfMap";
import { createUserMarkerOnMap } from "./createUserMarker";
import { drawCircleOnMap } from "./drawCircleOnMap";
import { getFeaturesFiltered } from "./getFeaturesFiltered";
import { showAlert } from "./showAlert";

interface IProps {
  location: [number, number];
  createUserMarkerAgain?: boolean;
  map: Map;
  markerUser: Marker;
  radius: number;
  filter: FilterOpts;
}

export const initMarkersByFilter = async ({
  createUserMarkerAgain = false,
  filter,
  location,
  map,
  markerUser,
  radius,
}: IProps): Promise<Feature[]> => {
  deletePolylineOfMap(map);
  if (createUserMarkerAgain) createUserMarkerOnMap({ location, map, markerUser });

  const searchRadius = drawCircleOnMap({ location, radius, map });

  const features = await getFeaturesFiltered({ lngLat: location, searchRadius, search: filter });

  if (features.length === 0) showAlert();
  return features;
};
