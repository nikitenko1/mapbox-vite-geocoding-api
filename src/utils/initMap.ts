import { Map } from "mapbox-gl";
import { token } from "./env";

interface IProps {
  userLocation: [number, number];
  container: string | HTMLElement;
}

export const initMap = ({ container, userLocation }: IProps): null | Map => {
  if (!userLocation) return null;

  const initMap: Map = new Map({
    container,
    style: "mapbox://styles/mapbox/streets-v12",
    pitchWithRotate: false,
    center: userLocation,
    zoom: 11,
    accessToken: token,
    doubleClickZoom: false,
  });

  return initMap;
};
