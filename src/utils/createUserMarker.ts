import { Map, Marker, Popup } from "mapbox-gl";

interface IProps {
  location: [number, number];
  map: Map;
  markerUser: Marker;
}

export const createUserMarkerOnMap = ({ location, map, markerUser }: IProps) => {
  if (!map) return;
  markerUser.remove();
  // options.anchor: string indicating the part of the Marker that should be positioned closest to the coordinate set via
  const popup = new Popup({ closeButton: false, anchor: "left" }).setHTML(
    `<div class="popup">You're here currently</div>`
  );

  markerUser.setLngLat(location).setPopup(popup).addTo(map);
};
