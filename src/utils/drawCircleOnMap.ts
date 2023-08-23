import * as turf from "@turf/turf";
import { Map, GeoJSONSource } from "mapbox-gl";

interface IProps {
  location: [number, number];
  radius: number;
  map: Map;
}

export const drawCircleOnMap = ({ location, map, radius }: IProps) => {
  const point = turf.point(location);
  //   Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees
  const buffered = turf.buffer(point, radius, { units: "kilometers" });
  //   Sets the GeoJSON data and re-renders the map.
  (map.getSource("search-radius") as GeoJSONSource).setData(buffered);
  return buffered;
};
