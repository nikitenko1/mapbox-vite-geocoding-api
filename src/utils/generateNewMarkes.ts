import { Map, Marker, Popup } from "mapbox-gl";
import { Feature } from "../interfaces/map";
import { getRouteBetweenRoutes } from "./getRouteBetweenRoutes";

interface IProps {
  features: Feature[];
  location: [number, number];
  map: Map;
}

export const generateNewMarkers = ({ features, location, map }: IProps): Marker[] => {
  const newMarkers: Marker[] = [];
  //   Example response: Forward geocodingі
  //   "features": [{
  //     "id": "address.4356035406756260",
  //     "type": "Feature",
  //     "place_type": [
  //         "address"
  //     ],
  //     "relevance": 1,
  //     "properties": {},
  //     "text": "Milwaukee Ave",
  //     "place_name": "825 Milwaukee Ave, Deerfield, Illinois 60015, United States",
  //     "matching_text": "South Milwaukee Avenue", ...
  for (const place of features) {
    const placePosition = place.center;

    const popUp = new Popup({ closeButton: false }).setHTML(` 
            <div class="popup">
                <h5 class="text-lg">${place.place_name}</h5>
                <p>${place.text}</p>
            </div>
        `);

    const markerGenerate = new Marker({ color: "#c2367c" })
      .setPopup(popUp)
      .setLngLat([placePosition[0], placePosition[1]])
      .addTo(map);

    markerGenerate.getElement().addEventListener("click", () => {
      getRouteBetweenRoutes({
        start: [location[0], location[1]],
        end: [placePosition[0], placePosition[1]],
        map,
      });
    });

    newMarkers.push(markerGenerate);
  }

  return newMarkers;
};
