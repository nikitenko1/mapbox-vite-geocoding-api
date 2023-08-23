import mapStyle from "./style.module.css";
import { useMapInit } from "../../hooks/useMapInit";

export const MapView = () => {
  const mapDiv = useMapInit();

  return <div ref={mapDiv} className={mapStyle.container_map} />;
};
