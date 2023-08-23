import { AnySourceData, LngLatBounds, Map } from "mapbox-gl";
import { token } from "./env";
import { deletePolylineOfMap } from "./deletePolylineOfMap";

interface IProps {
  start: [number, number];
  end: [number, number];
  map: Map;
}

export const getRouteBetweenRoutes = async ({ end, start, map }: IProps) => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]}%2C${start[1]}%3B${end[0]}%2C${end[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${token}`;

  const response = await fetch(url);
  const data = await response.json();
  //   Example response: Retrieve directions
  //   {
  //     "routes": [
  //       {
  //   "geometry": "mnn_Ick}pAfBiF`CzA",
  //   ...
  //   "duration": 26.2,
  //   "distance": 176.7
  if (data.routes.length === 0) return;

  const { distance, duration, geometry } = data.routes[0];

  if (distance === 0) return;
  // this is a GeoJSON LineString or a Polyline string representing the full route geometry
  //   {
  //     "type": "LineString",
  //     "coordinates": [
  //         [100.0, 0.0],
  //         [101.0, 1.0]
  //     ]
  // }
  const { coordinates } = geometry;

  const bounds = new LngLatBounds(start, start);

  for (const coord of coordinates) {
    const newCors: [number, number] = [coord[0], coord[1]];
    bounds.extend(newCors);
  }
  map.fitBounds(bounds, {
    padding: 80,
  });

  const sourceData: AnySourceData = {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      ],
    },
  };

  deletePolylineOfMap(map);

  map?.addSource("route", sourceData);
  map?.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#7a63e0",
      "line-width": 5,
    },
  });
};
